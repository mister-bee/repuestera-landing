import { NextRequest, NextResponse } from "next/server"

const WHATSAPP_API_URL = "https://graph.facebook.com/v18.0"

export async function POST(request: NextRequest) {
  try {
    const { name, contact, message } = await request.json()

    // Validate input
    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "Nombre, contacto y mensaje son requeridos" },
        { status: 400 }
      )
    }

    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
    const businessNumber = process.env.WHATSAPP_BUSINESS_NUMBER

    // Check if API is configured
    if (!phoneNumberId || !accessToken || !businessNumber) {
      console.error("WhatsApp API not configured. Using fallback.")
      return NextResponse.json(
        {
          success: false,
          fallback: true,
          message: "WhatsApp API no configurada. Use el enlace directo.",
          whatsappUrl: `https://wa.me/${businessNumber || "5493874857539"}?text=${encodeURIComponent(
            `Hola! Soy ${name}.\n\nContacto: ${contact}\n\nMensaje: ${message}`
          )}`
        },
        { status: 200 }
      )
    }

    // Compose message for the business
    const messageText = `Nueva consulta desde la web:\n\nNombre: ${name}\nContacto: ${contact}\nMensaje: ${message}`

    // Send message via WhatsApp Business API
    const response = await fetch(
      `${WHATSAPP_API_URL}/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: businessNumber,
          type: "text",
          text: {
            preview_url: false,
            body: messageText,
          },
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error("WhatsApp API error:", data)
      return NextResponse.json(
        {
          error: "Error al enviar mensaje",
          details: data.error?.message || "Unknown error",
          fallback: true,
          whatsappUrl: `https://wa.me/${businessNumber}?text=${encodeURIComponent(
            `Hola! Soy ${name}.\n\nContacto: ${contact}\n\nMensaje: ${message}`
          )}`
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
      messageId: data.messages?.[0]?.id,
    })

  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}

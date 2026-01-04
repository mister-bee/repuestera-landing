# WhatsApp Configuration

## Current Implementation (Click-to-Chat)

The contact form currently uses WhatsApp's click-to-chat feature (`wa.me` links). This pre-fills a message and opens WhatsApp, but the user must manually click "Send".

### Configuration

In `app/page.tsx`, the `handleWhatsAppSubmit` function:

```tsx
window.open(`https://wa.me/PHONE_NUMBER?text=${text}`, "_blank")
```

### Current Numbers

| Environment | Number | Notes |
|-------------|--------|-------|
| Production | `5493874857539` | +54 9 387 485 7539 (Argentina) |
| Testing | `15102899285` | +1 510 289 9285 (US) |

---

## WhatsApp Business API (Automated Messaging)

To send messages automatically without user confirmation, you need the WhatsApp Business API.

### Requirements

- Meta Business account (verified)
- Phone number not linked to any WhatsApp account
- Backend server to make API calls
- Approved message templates (for initiating conversations)

### Setup Steps

1. **Create Meta Developer App**
   - Go to [developers.facebook.com](https://developers.facebook.com)
   - Click "Create App" → Select "Business"
   - Enter company details and link to Facebook Business Manager

2. **Configure WhatsApp**
   - From app dashboard, click "Set up" under WhatsApp
   - Accept WhatsApp Cloud API Terms
   - Add and verify your business phone number

3. **Get API Credentials**
   - Go to Meta Business Suite → Business Settings → Users → System Users
   - Create a system user
   - Generate access token with WhatsApp permissions

4. **Create Message Templates**
   - In Facebook Business Manager → WhatsApp Accounts
   - Click "Create Message Template"
   - Submit for approval (required for initiating conversations)

### Sending Messages (API Example)

```typescript
// Backend API route (e.g., /api/send-whatsapp)
const sendWhatsAppMessage = async (to: string, message: string) => {
  const response = await fetch(
    `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: { body: message }
      })
    }
  );
  return response.json();
};
```

### Pricing (as of July 2025)

- **Free tier**: First 1,000 conversations/month
- **User-initiated**: Free replies within 24-hour window
- **Business-initiated**: Charged per message (varies by region)
- **New accounts**: Start with 250 messages/day limit, increases over time

### Implementation (DONE)

The WhatsApp Business API integration is implemented:

1. **API Route**: `/app/api/whatsapp/send/route.ts`
2. **Environment Variables**: Copy `.env.local.example` to `.env.local` and fill in:
   ```env
   WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
   WHATSAPP_ACCESS_TOKEN=your_access_token
   WHATSAPP_BUSINESS_NUMBER=5493874857539
   ```
3. **Form**: Updated to call API with loading/success/error states
4. **Fallback**: If API not configured, automatically falls back to wa.me link

### Pros & Cons

| Approach | Pros | Cons |
|----------|------|------|
| Click-to-Chat (current) | Free, no backend needed, simple | User must click send |
| Business API | Fully automated, professional | Requires setup, verification, costs money |

---

## Resources

- [WhatsApp Cloud API Guide](https://zixflow.com/blog/send-message-through-whatsapp-api/)
- [WhatsApp Business Platform](https://business.whatsapp.com/products/business-platform-features)
- [WhatsApp API Guide](https://respond.io/blog/whatsapp-business-api)
- [Automation Guide](https://wanotifier.com/whatsapp-automation-ultimate-guide/)

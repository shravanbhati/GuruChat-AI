# ChatGuru AI

ChatGuru AI is an interactive chat application that allows users to have conversations with AI representations of popular tech educators Hitesh Choudhary and Piyush Garg. The application features a modern UI with persistent chat history, real-time typing indicators, and a responsive design.

## Key Features

- **Character Selection**: Chat with AI versions of Hitesh Choudhary or Piyush Garg
- **Persistent Chat History**: Chat history is saved in localStorage and persists between sessions
- **Real-time Indicators**: Shows "writing..." status when the AI is responding
- **Responsive Design**: Works on desktop and mobile devices
- **Sidebar Navigation**: Easy switching between characters with last message previews
- **Home Page**: Profile cards for each character with quick access to chat

## Technologies Used

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI API](https://openai.com/)
- [Gemini API](https://gemini.google.com/)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd guruchat
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Environment Variables

Create a `.env.local` file in the root directory and add your API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## Running the Application

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
# or
bun build
bun start
```

## Project Structure

```
app/
  ├── page.js          # Home page with character profiles
  ├── layout.js        # Root layout
  ├── chat/
  │   ├── page.js      # Chat interface (server-side rendering wrapper)
  │   └── client.js    # Client-side chat component
  ├── api/
  │   └── chat/
  │       └── route.js # Chat API endpoint
  └── characters/
      ├── Hitesh.js    # Hitesh Choudhary character prompt
      └── Piyush.js    # Piyush Garg character prompt

Components/
  ├── ProfileCard.js   # Character profile cards
  ├── ChatBubble.js    # Chat message bubbles
  ├── ChatHeader.js    # Chat header with status
  ├── ChatInput.js     # Message input component
  ├── Sidebar.js       # Character selection sidebar
  ├── Hero.js          # Home page hero section
  ├── SocialButtons.js # Social media links
  ├── Tag.js           # Tag display component
  └── TypingDots.js    # Typing indicator animation

public/
  └── *.jpg            # Character images
```

## API Endpoints

### POST /api/chat

Handles chat requests to the AI models.

**Request Body:**

```json
{
  "message": "Your message here",
  "model": "hitesh" or "piyush"
}
```

**Response:**

```json
{
  "response": "AI generated response"
}
```

## Components Overview

### Profile Cards

Located on the home page, these cards provide an overview of each character and a quick link to start chatting.

### Chat Interface

The main chat interface includes:

- **Sidebar**: Character selection with last message previews
- **Chat Header**: Character name, avatar, and online/writing status
- **Chat Bubbles**: Display messages from user and AI
- **Chat Input**: Text input for sending messages

### Character Prompts

Each character has a detailed prompt that defines their personality, communication style, and knowledge base:

- `app/characters/Hitesh.js`: Hitesh Choudhary's character prompt
- `app/characters/Piyush.js`: Piyush Garg's character prompt

## Deployment Considerations

This application is configured for deployment on Vercel. The chat page has been refactored to handle both server-side rendering and client-side interactivity:

1. **Server-Side Rendering**: The `app/chat/page.js` file handles initial rendering with search parameters
2. **Client-Side Interactivity**: The `app/chat/client.js` file handles all client-side functionality including `useSearchParams`

This architecture resolves common issues with `useSearchParams` in production builds.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

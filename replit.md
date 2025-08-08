# Mom's Approved Kitchen - Replit Configuration

## Overview

Mom's Approved Kitchen is a full-stack web application for a home-cooked Indian food service in Bengaluru. The application serves as a digital menu and contact platform, showcasing authentic Indian dishes with detailed descriptions, prices, and imagery. Users can browse the menu, learn about the service, and place orders through WhatsApp integration. The application emphasizes the warmth and authenticity of home cooking with a modern, responsive web interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Design**: RESTful API with JSON responses
- **Data Layer**: In-memory storage with interface abstraction for future database migration
- **Development Server**: Vite development server with HMR integration
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Current Implementation**: In-memory storage using Maps for development/demo purposes
- **Database Schema**: Drizzle ORM configured for PostgreSQL with Neon Database integration
- **Schema Definition**: Shared schema definitions using Drizzle and Zod for runtime validation
- **Migration Support**: Drizzle Kit for schema migrations and database management

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Express sessions configured with PostgreSQL session store (connect-pg-simple)
- **Security**: CORS and request logging middleware implemented

### UI/UX Design Decisions
- **Design System**: New York style variant from shadcn/ui with neutral base colors
- **Typography**: Inter font family for modern, readable text
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **WhatsApp Integration**: Direct linking to WhatsApp for order placement and customer communication
- **Toast Notifications**: Radix UI Toast system for user feedback

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Development**: TSX for TypeScript execution, Replit development plugins

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Utility Libraries**: class-variance-authority, clsx for conditional styling
- **Icons**: Font Awesome, Lucide React

### Database and Validation
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Database**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod for schema validation, drizzle-zod for integration

### Third-Party Integrations
- **WhatsApp Business**: Direct integration via WhatsApp URLs for order placement
- **Google Fonts**: Inter font family loaded via CDN
- **Image Hosting**: Unsplash for food imagery
- **Menu PDF**: External redirect for downloadable menu

### Development and Deployment
- **Replit Integration**: Replit-specific plugins for development environment
- **Session Storage**: PostgreSQL-based session management
- **Error Tracking**: Runtime error overlay for development
- **Build Process**: Separate client and server build processes with ESBuild
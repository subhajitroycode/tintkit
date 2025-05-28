# tintkit

A simple and intuitive tool to create beautiful color scales for your design projects. Generate harmonious color palettes with customizable scales that work perfectly with Tailwind CSS and standard CSS workflows.

## Features

- **Smart Color Scale Generation**: Automatically generates 11-shade color scales (50-950) based on your input color
- **Intelligent Base Scale Detection**: Automatically determines the optimal position for your base color within the scale
- **Multiple Color Support**: Add up to 3 color scales (primary, secondary, tertiary)
- **Flexible Export Options**:
  - Tailwind CSS v3 & v4 formats
  - Standard CSS custom properties
  - Multiple color formats: HEX, RGB, HSL, OKLCH
- **Real-time Preview**: See your color scales applied to UI components (cards, buttons, visualizations)
- **Dark Mode Support**: Built-in dark/light theme toggle
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **One-Click Copy**: Click any color to copy its hex value to clipboard

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/subhajitroycode/tintkit.git
cd tintkit
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Usage

### Basic Usage

1. **Choose Your Base Color**: Use the color picker or enter a hex code
2. **Name Your Color**: Give your color scale a meaningful name
3. **Adjust Base Scale** (optional): Override the auto-detected base scale position
4. **Add More Colors**: Click "Add secondary color" to create additional color scales
5. **Export Your Scales**: Use the export buttons to get code in your preferred format

### Export Formats

#### Tailwind CSS v4
```css
--color-primary-50: #f0f9ff;
--color-primary-100: #e0f2fe;
--color-primary-500: #0ea5e9;
--color-primary-900: #0c4a6e;
```

#### Tailwind CSS v3
```javascript
'primary': {
    '50': '#f0f9ff',
    '100': '#e0f2fe',
    '500': '#0ea5e9',
    '900': '#0c4a6e',
},
```

#### CSS Custom Properties
```css
:root {
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-500: #0ea5e9;
  --color-primary-900: #0c4a6e;
}
```

### UI Samples

Preview your color scales with real UI components:
- **Cards**: See how your colors work in card-based layouts
- **Buttons**: Preview button states and variants
- **Visuals**: Check your colors in charts and data visualizations

## Technology Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Icons**: React Icons
- **Charts**: Recharts
- **Color Processing**: Custom color conversion utilities

## Project Structure

```
src/
├── components/
│   ├── Dashboard/          # Control panel and input components
│   ├── ScaleDisplay/       # Color scale visualization
│   ├── UISamples/         # UI component previews
│   └── Modals/            # Export modal
├── contexts/              # React context for color state
├── utils/                 # Color generation and conversion utilities
└── main.jsx              # Application entry point
```

## Color Scale Algorithm

tintkit uses a sophisticated algorithm to generate harmonious color scales:

1. **Base Scale Detection**: Analyzes the lightness of your input color to determine the optimal scale position (50-950)
2. **Lighter Shades**: Progressively increases lightness while slightly decreasing saturation
3. **Darker Shades**: Progressively decreases lightness while slightly increasing saturation
4. **Boundary Protection**: Ensures colors don't exceed perceptual limits

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure responsive design principles are maintained

## Browser Support

tintkit works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Custom Properties
- CSS Grid and Flexbox

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the legendary [uicolors.app](https://uicolors.app)
- Built with modern web technologies for optimal performance
- Designed with accessibility and usability in mind

## Support

If you find tintkit helpful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs via GitHub issues
- 💡 Suggesting new features
- 🤝 Contributing to the codebase

---

Made with ❤️ for designers and developers who love beautiful colors.
#!/bin/bash

# Keloh Website Deployment Script
# This script helps you deploy your website to various platforms

echo "🚀 Keloh Website Deployment Helper"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from your project root directory"
    exit 1
fi

# Build the project
echo "📦 Building your website..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Show deployment options
echo "Choose your deployment method:"
echo "1) Vercel (Recommended - requires Vercel CLI)"
echo "2) Netlify (requires Netlify CLI)"
echo "3) Manual upload (creates zip file)"
echo "4) GitHub Pages setup"
echo "5) Show deployment guide"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo "🔄 Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "❌ Vercel CLI not found. Install it with: npm i -g vercel"
            echo "Or visit: https://vercel.com/download"
        fi
        ;;
    2)
        echo "🔄 Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
        else
            echo "❌ Netlify CLI not found. Install it with: npm i -g netlify-cli"
            echo "Or drag and drop the 'dist' folder to netlify.com"
        fi
        ;;
    3)
        echo "📦 Creating deployment package..."
        cd dist
        zip -r ../keloh-website-$(date +%Y%m%d).zip .
        cd ..
        echo "✅ Created deployment package: keloh-website-$(date +%Y%m%d).zip"
        echo "Upload this zip file to your hosting provider"
        ;;
    4)
        echo "🔧 Setting up GitHub Pages..."
        npm install --save-dev gh-pages
        echo "✅ gh-pages installed"
        echo "📝 Add these scripts to your package.json:"
        echo '  "predeploy": "npm run build",'
        echo '  "deploy": "gh-pages -d dist"'
        echo ""
        echo "Then run: npm run deploy"
        ;;
    5)
        echo "📖 Opening deployment guide..."
        if command -v open &> /dev/null; then
            open DEPLOYMENT_GUIDE.md
        elif command -v xdg-open &> /dev/null; then
            xdg-open DEPLOYMENT_GUIDE.md
        else
            echo "📄 Check the DEPLOYMENT_GUIDE.md file for detailed instructions"
        fi
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Your Keloh website is ready for the world!"
echo "Need help? Check the DEPLOYMENT_GUIDE.md file"
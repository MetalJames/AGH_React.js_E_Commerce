This is a self-learned project.

Follow the youtube javascript mastery - https://www.youtube.com/watch?v=377AQ0y6LPA - with some of my implementations.
Thanks to JavaScript Mastery for the great youtube content!

My implementations in this project:

1. Added single-page product - More... page - were comparing a single product to a list of products and displaying only needed product.
2. Added Gallery for a single product where loading images using assets images Api from commerce.js
3. This is a V6 of React.js, routing use with V6 rules.
4. Make it a bit more mobile-friendly by switching between icons on different devices(mobile and desktop). Cart item displayed as an 
    image on mobile and 'Add To Cart' on desktop devices. I used - const isMobile = window.innerWidth <= 500; to make it work properly.
5. Add 'Footer' and position it 'fixed'.
6. Because I add a footer I had to use more of - const isMobile = window.innerWidth <= 500 to display items properly on different pages 
    without it being hidden behind a footer.
7. (location.pathname !== '/cart' && location.pathname !== '/checkout') - 2 locations included - not 1 as I have 2 more pages and
    '/' this was displaying cart only at the home location but not at the product more and gallery.
8. Name of the site is hidden on the mobile and displayed on the desktop. Only logo displayed on mobile.
9. Also, I cleaned the cart after payment is completed and did not keep items in the cart.

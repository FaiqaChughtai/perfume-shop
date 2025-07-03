
        // Products data with detailed information
        const products = [
            {
                id: 1,
                name: "REPTILE NOIR",
                price: 8500,
                image: "https://plus.unsplash.com/premium_photo-1676748933022-e1183e997436?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
                description: "Dark and mysterious fragrance with notes of black pepper and sandalwood",
                details: {
                    "Volume": "100ml",
                    "Type": "Eau de Parfum",
                    "Top Notes": "Black Pepper, Bergamot",
                    "Heart Notes": "Rose, Jasmine",
                    "Base Notes": "Sandalwood, Musk",
                    "Longevity": "8-10 hours",
                    "Sillage": "Strong"
                }
            },
            {
                id: 2,
                name: "REPTILE GOLD",
                price: 9500,
                image: "https://images.unsplash.com/photo-1506915925765-ed31516b9080?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
                description: "Luxurious golden essence with amber and vanilla undertones",
                details: {
                    "Volume": "100ml",
                    "Type": "Eau de Parfum",
                    "Top Notes": "Citrus, Saffron",
                    "Heart Notes": "Amber, Vanilla",
                    "Base Notes": "Oud, Patchouli",
                    "Longevity": "10-12 hours",
                    "Sillage": "Very Strong"
                }
            },
            {
                id: 3,
                name: "REPTILE CRYSTAL",
                price: 7500,
                image: "https://media.istockphoto.com/id/2149958896/photo/two-luxury-perfume-bottles-on-studio-display.webp?a=1&b=1&s=612x612&w=0&k=20&c=uNAykoTPWFcOU7j-CgRf4Jayv45xg-cozeSrhBGFXgY=",
                description: "Fresh and crystalline scent perfect for daily wear",
                details: {
                    "Volume": "100ml",
                    "Type": "Eau de Parfum",
                    "Top Notes": "Lemon, Mint",
                    "Heart Notes": "Lavender, Geranium",
                    "Base Notes": "Cedar, White Musk",
                    "Longevity": "6-8 hours",
                    "Sillage": "Moderate"
                }
            },
            {
                id: 4,
                name: "REPTILE ROYAL",
                price: 12000,
                image: "https://media.istockphoto.com/id/2152147018/photo/perfume-bottle-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=79141wBur9X4JQ1eh0U7s_irnD7iLP2hg-7ZsMpDGt8=",
                description: "Premium royal collection with rare ingredients",
                details: {
                    "Volume": "100ml",
                    "Type": "Parfum",
                    "Top Notes": "Pink Pepper, Cardamom",
                    "Heart Notes": "Turkish Rose, Iris",
                    "Base Notes": "Agarwood, Ambergris",
                    "Longevity": "12+ hours",
                    "Sillage": "Exceptional"
                }
            },
            {
                id: 5,
                name: "REPTILE WILD",
                price: 6500,
                image: "https://plus.unsplash.com/premium_photo-1676748933022-e1183e997436?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
                description: "Untamed and bold fragrance for the adventurous spirit",
                details: {
                    "Volume": "100ml",
                    "Type": "Eau de Parfum",
                    "Top Notes": "Grapefruit, Ginger",
                    "Heart Notes": "Vetiver, Tobacco",
                    "Base Notes": "Leather, Oakmoss",
                    "Longevity": "8-10 hours",
                    "Sillage": "Strong"
                }
            },
            {
                id: 6,
                name: "REPTILE ELITE",
                price: 15000,
                image: "https://images.unsplash.com/photo-1506915925765-ed31516b9080?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
                description: "Exclusive elite edition with handcrafted bottle",
                details: {
                    "Volume": "100ml",
                    "Type": "Parfum",
                    "Top Notes": "Rare Spices, Citrus Zest",
                    "Heart Notes": "Bulgarian Rose, Jasmine Sambac",
                    "Base Notes": "Royal Oud, Precious Woods",
                    "Longevity": "15+ hours",
                    "Sillage": "Legendary"
                }
            }
        ];

        // Cart and wishlist functionality
        let cart = [];
        let wishlist = [];
        let cartCount = 0;
        let wishlistCount = 0;

        // DOM elements
        const header = document.getElementById('header');
        const progressBar = document.getElementById('progressBar');
        const searchBtn = document.getElementById('searchBtn');
        const searchModal = document.getElementById('searchModal');
        const searchInput = document.getElementById('searchInput');
        const searchClose = document.getElementById('searchClose');
        const themeBtn = document.getElementById('themeBtn');
        const themeMenu = document.getElementById('themeMenu');
        const wishlistBtn = document.getElementById('wishlistBtn');
        const wishlistModal = document.getElementById('wishlistModal');
        const wishlistClose = document.getElementById('wishlistClose');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileSidebar = document.getElementById('mobileSidebar');
        const sidebarClose = document.getElementById('sidebarClose');
        const cartBtn = document.getElementById('cartBtn');
        const cartModal = document.getElementById('cartModal');
        const cartClose = document.getElementById('cartClose');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const checkoutModal = document.getElementById('checkoutModal');
        const checkoutClose = document.getElementById('checkoutClose');
        const successModal = document.getElementById('successModal');
        const productsGrid = document.getElementById('productsGrid');
        const cartCountElement = document.getElementById('cartCount');
        const wishlistCountElement = document.getElementById('wishlistCount');
        const cartItems = document.getElementById('cartItems');
        const wishlistItems = document.getElementById('wishlistItems');
        const cartTotal = document.getElementById('cartTotal');
        const overlay = document.getElementById('overlay');

        // Progress bar functionality
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';

            // Header scroll effect
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Theme functionality
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!themeMenu.contains(e.target) && !themeBtn.contains(e.target)) {
                themeMenu.classList.remove('active');
            }
        });

        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.getAttribute('data-theme');
                document.body.setAttribute('data-theme', theme);
                themeMenu.classList.remove('active');
                localStorage.setItem('selectedTheme', theme);
            });
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
        }

        // Search functionality
        searchBtn.addEventListener('click', () => {
            searchModal.classList.add('active');
            searchInput.focus();
        });

        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('active');
        });

        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });

        // Wishlist functionality
        wishlistBtn.addEventListener('click', () => {
            wishlistModal.classList.add('active');
            displayWishlistItems();
        });

        wishlistClose.addEventListener('click', () => {
            wishlistModal.classList.remove('active');
        });

        wishlistModal.addEventListener('click', (e) => {
            if (e.target === wishlistModal) {
                wishlistModal.classList.remove('active');
            }
        });

        // Mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileSidebar.classList.add('active');
        });

        sidebarClose.addEventListener('click', () => {
            mobileSidebar.classList.remove('active');
        });

        // Cart modal
        cartBtn.addEventListener('click', () => {
            cartModal.classList.add('active');
            displayCartItems();
        });

        cartClose.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });

        // Checkout functionality
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showSuccess('Cart Empty', 'Please add items to cart before checkout.');
                return;
            }
            cartModal.classList.remove('active');
            checkoutModal.classList.add('active');
            displayCheckoutItems();
        });

        checkoutClose.addEventListener('click', () => {
            checkoutModal.classList.remove('active');
        });

        // Payment method change
        document.getElementById('paymentMethod').addEventListener('change', (e) => {
            const cardDetails = document.getElementById('cardDetails');
            if (e.target.value === 'card') {
                cardDetails.style.display = 'block';
                document.getElementById('cardNumber').required = true;
                document.getElementById('expiryDate').required = true;
                document.getElementById('cvv').required = true;
            } else {
                cardDetails.style.display = 'none';
                document.getElementById('cardNumber').required = false;
                document.getElementById('expiryDate').required = false;
                document.getElementById('cvv').required = false;
            }
        });

        // Checkout form submission
        document.getElementById('checkoutForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate order processing
            checkoutModal.classList.remove('active');
            showSuccess('Order Placed!', 'Your order has been placed successfully. You will receive a confirmation email shortly.');
            
            // Clear cart
            cart = [];
            cartCount = 0;
            cartCountElement.textContent = cartCount;
        });

        // Close modals when clicking outside
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });

        checkoutModal.addEventListener('click', (e) => {
            if (e.target === checkoutModal) {
                checkoutModal.classList.remove('active');
            }
        });

        overlay.addEventListener('click', () => {
            closeExpandedCard();
        });

        // Load products
        function loadProducts() {
            productsGrid.innerHTML = '';
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">PKR ${product.price.toLocaleString()}</p>
                    <div class="product-actions">
                        <button class="buy-btn" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="wishlist-heart" onclick="toggleWishlist(${product.id})" id="wishlist-${product.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                `;
                
                productsGrid.appendChild(productCard);
            });
        }

        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({...product, quantity: 1});
            }
            
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            showSuccess('Added to Cart!', `${product.name} has been added to your cart.`);
        }

        // Toggle wishlist
        function toggleWishlist(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = wishlist.find(item => item.id === productId);
            const heartBtn = document.getElementById(`wishlist-${productId}`);
            
            if (existingItem) {
                wishlist = wishlist.filter(item => item.id !== productId);
                wishlistCount--;
                heartBtn.classList.remove('active');
                showSuccess('Removed from Wishlist', `${product.name} has been removed from your wishlist.`);
            } else {
                wishlist.push(product);
                wishlistCount++;
                heartBtn.classList.add('active');
                showSuccess('Added to Wishlist!', `${product.name} has been added to your wishlist.`);
            }
            
            wishlistCountElement.textContent = wishlistCount;
        }

        // Remove from cart
        function removeFromCart(productId) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex > -1) {
                const item = cart[itemIndex];
                cartCount -= item.quantity;
                cart.splice(itemIndex, 1);
                cartCountElement.textContent = cartCount;
                displayCartItems();
            }
        }

        // Remove from wishlist
        function removeFromWishlist(productId) {
            wishlist = wishlist.filter(item => item.id !== productId);
            wishlistCount--;
            wishlistCountElement.textContent = wishlistCount;
            displayWishlistItems();
            
            // Update heart button
            const heartBtn = document.getElementById(`wishlist-${productId}`);
            if (heartBtn) {
                heartBtn.classList.remove('active');
            }
        }

        // Display cart items
        function displayCartItems() {
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;"><i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>Your cart is empty</p>';
                cartTotal.textContent = 'Total: PKR 0';
                return;
            }

            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">PKR ${item.price.toLocaleString()} x ${item.quantity}</div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                `;
                cartItems.appendChild(cartItem);
                total += item.price * item.quantity;
            });

            cartTotal.textContent = `Total: PKR ${total.toLocaleString()}`;
        }

        // Display wishlist items
        function displayWishlistItems() {
            if (wishlist.length === 0) {
                wishlistItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;"><i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>Your wishlist is empty</p>';
                return;
            }

            wishlistItems.innerHTML = '';

            wishlist.forEach(item => {
                const wishlistItem = document.createElement('div');
                wishlistItem.className = 'cart-item';
                wishlistItem.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">PKR ${item.price.toLocaleString()}</div>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="buy-btn" onclick="addToCart(${item.id})" style="padding: 0.5rem 1rem; font-size: 0.8rem;">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                        <button class="remove-btn" onclick="removeFromWishlist(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                wishlistItems.appendChild(wishlistItem);
            });
        }

        // Display checkout items
        function displayCheckoutItems() {
            const checkoutItemsContainer = document.getElementById('checkoutItems');
            const subtotalElement = document.getElementById('subtotal');
            const taxElement = document.getElementById('tax');
            const finalTotalElement = document.getElementById('finalTotal');
            
            checkoutItemsContainer.innerHTML = '';
            let subtotal = 0;

            cart.forEach(item => {
                const checkoutItem = document.createElement('div');
                checkoutItem.className = 'summary-item';
                checkoutItem.innerHTML = `
                    <span>${item.name} x ${item.quantity}</span>
                    <span>PKR ${(item.price * item.quantity).toLocaleString()}</span>
                `;
                checkoutItemsContainer.appendChild(checkoutItem);
                subtotal += item.price * item.quantity;
            });

            const shipping = 500;
            const tax = Math.round(subtotal * 0.1); // 10% tax
            const finalTotal = subtotal + shipping + tax;

            subtotalElement.textContent = `PKR ${subtotal.toLocaleString()}`;
            taxElement.textContent = `PKR ${tax.toLocaleString()}`;
            finalTotalElement.textContent = `PKR ${finalTotal.toLocaleString()}`;
        }

        // Show success modal
        function showSuccess(title, message) {
            document.getElementById('successTitle').textContent = title;
            document.getElementById('successMessage').textContent = message;
            successModal.classList.add('active');
            setTimeout(() => {
                successModal.classList.remove('active');
            }, 3000);
        }

        // Scroll to products
        function scrollToProducts() {
            document.getElementById('products').scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile sidebar if open
                mobileSidebar.classList.remove('active');
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadProducts();
        });

        // Close mobile sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileSidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileSidebar.classList.remove('active');
            }
        });

        // Search functionality
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            
            const searchResults = document.getElementById('searchResults');
            if (searchTerm.length > 0) {
                searchResults.innerHTML = `
                    <div style="margin-top: 1rem;">
                        <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Search Results (${filteredProducts.length})</h4>
                        ${filteredProducts.map(product => `
                            <div style="padding: 0.8rem; background: rgba(255,255,255,0.1); margin-bottom: 0.5rem; border-radius: 10px; cursor: pointer;" onclick="searchModal.classList.remove('active'); document.getElementById('products').scrollIntoView({behavior: 'smooth'});">
                                <strong style="color: var(--primary-color);">${product.name}</strong><br>
                                <small style="color: #666;">${product.description}</small><br>
                                <span style="color: var(--secondary-color); font-weight: bold;">PKR ${product.price.toLocaleString()}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                searchResults.innerHTML = '';
            }
        });

        // Close modals with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchModal.classList.remove('active');
                cartModal.classList.remove('active');
                wishlistModal.classList.remove('active');
                checkoutModal.classList.remove('active');
                themeMenu.classList.remove('active');
            }
        });

        // Add floating animation to cart count
        setInterval(() => {
            if (cartCount > 0) {
                cartCountElement.style.animation = 'pulse 1s ease-in-out';
                setTimeout(() => {
                    cartCountElement.style.animation = '';
                }, 1000);
            }
        }, 3000);
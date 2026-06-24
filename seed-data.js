// Seed data for FLORIA — luxury women's fashion
// Run via: window.seedFirestoreData(true)

window.seedFirestoreData = function (clearExisting) {
    var db = firebase.firestore();
    var projectRef = db.collection('projects').doc('floria');

    var products = [
        { name: 'فستان سهرة مخمل أسود', brand: 'Floria Signature', category: 'فساتين سهرة', price: 420, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop', description: 'فستان سهرة طويل من المخمل الفاخر بقصّة أنيقة تبرز الإطلالة.', status: 'bestseller', inStock: true, order: 1 },
        { name: 'فستان ساتان زهري', brand: 'Floria Signature', category: 'فساتين سهرة', price: 380, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop', description: 'فستان من الساتان الناعم بلون زهري راقٍ لإطلالة ناعمة.', status: 'special', inStock: true, order: 2 },
        { name: 'عباية كم واسع بيج', brand: 'Floria Atelier', category: 'عبايات', price: 290, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', description: 'عباية بقصّة عصرية وأكمام واسعة بلمسة ذهبية على الأطراف.', status: 'bestseller', inStock: true, order: 3 },
        { name: 'عباية كلوش أسود مطرز', brand: 'Floria Atelier', category: 'عبايات', price: 340, image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&h=800&fit=crop', description: 'عباية كلوش سوداء بتطريز يدوي فاخر على الصدر.', status: 'normal', inStock: true, order: 4 },
        { name: 'طقم بليزر وبنطلون كحلي', brand: 'Floria Studio', category: 'أطقم', price: 360, image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&h=800&fit=crop', description: 'طقم رسمي أنيق من بليزر وبنطلون بقصّة مستقيمة.', status: 'special', inStock: true, order: 5 },
        { name: 'طقم تريكو بيج ناعم', brand: 'Floria Studio', category: 'أطقم', price: 240, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop', description: 'طقم تريكو مريح وأنيق لإطلالة يومية دافئة.', status: 'normal', inStock: true, order: 6 },
        { name: 'بلوزة حرير كريمية', brand: 'Floria Studio', category: 'بلوزات', price: 160, image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop', description: 'بلوزة من الحرير بلون كريمي بقصّة انسيابية.', status: 'bestseller', inStock: true, order: 7 },
        { name: 'بلوزة ساتان بكشكشة', brand: 'Floria Studio', category: 'بلوزات', price: 175, image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&h=800&fit=crop', description: 'بلوزة ساتان بتفاصيل كشكشة ناعمة على الأكمام.', status: 'normal', inStock: true, order: 8 },
        { name: 'تنورة ميدي بليسيه ذهبية', brand: 'Floria Signature', category: 'تنانير', price: 195, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop', description: 'تنورة ميدي بطيات بليسيه بلمعة ذهبية خفيفة.', status: 'special', inStock: true, order: 9 },
        { name: 'تنورة جلد طويلة', brand: 'Floria Studio', category: 'تنانير', price: 220, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&h=800&fit=crop', description: 'تنورة جلد ناعم بقصّة طويلة عصرية.', status: 'normal', inStock: true, order: 10 },
        { name: 'فستان كاجوال صيفي مزهر', brand: 'Floria Studio', category: 'فساتين كاجوال', price: 185, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop', description: 'فستان صيفي خفيف بطبعة زهور أنيقة.', status: 'bestseller', inStock: true, order: 11 },
        { name: 'فستان قميص بحزام', brand: 'Floria Studio', category: 'فساتين كاجوال', price: 170, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop', description: 'فستان بقصّة القميص مع حزام يبرز الخصر.', status: 'normal', inStock: true, order: 12 },
        { name: 'معطف صوف طويل كاميل', brand: 'Floria Atelier', category: 'معاطف', price: 410, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop', description: 'معطف صوف فاخر بلون الكاميل وقصّة كلاسيكية.', status: 'special', inStock: true, order: 13 },
        { name: 'جاكيت مبطّن أنيق', brand: 'Floria Atelier', category: 'معاطف', price: 310, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop', description: 'جاكيت مبطّن خفيف لإطلالة دافئة وعصرية.', status: 'normal', inStock: true, order: 14 },
        { name: 'حقيبة يد جلد بيج', brand: 'Floria Accessories', category: 'حقائب', price: 230, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop', description: 'حقيبة يد من الجلد الطبيعي بتفاصيل معدنية ذهبية.', status: 'bestseller', inStock: true, order: 15 },
        { name: 'حقيبة كتف صغيرة سوداء', brand: 'Floria Accessories', category: 'حقائب', price: 180, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop', description: 'حقيبة كتف أنيقة بحجم عملي وتصميم راقٍ.', status: 'normal', inStock: true, order: 16 },
        { name: 'حذاء كعب جلد نود', brand: 'Floria Accessories', category: 'أحذية', price: 210, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop', description: 'حذاء بكعب متوسط بلون النود لإطلالة كلاسيكية.', status: 'special', inStock: true, order: 17 },
        { name: 'حذاء مسطح أنيق', brand: 'Floria Accessories', category: 'أحذية', price: 150, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop', description: 'حذاء مسطح مريح بتصميم بسيط وراقٍ.', status: 'normal', inStock: true, order: 18 },
        { name: 'شال حرير مطبوع', brand: 'Floria Accessories', category: 'إكسسوارات', price: 95, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=800&fit=crop', description: 'شال حريري بطبعة راقية يكمل أي إطلالة.', status: 'normal', inStock: true, order: 19 },
        { name: 'طقم إكسسوارات ذهبي', brand: 'Floria Accessories', category: 'إكسسوارات', price: 120, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=800&fit=crop', description: 'طقم مجوهرات ذهبي ناعم بتصميم عصري.', status: 'bestseller', inStock: true, order: 20 },
        { name: 'فستان مناسبات مطرز', brand: 'Floria Signature', category: 'فساتين سهرة', price: 690, image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop', description: 'فستان فاخر للمناسبات الكبرى بتفاصيل مطرزة.', status: 'special', inStock: true, order: 21 },
        { name: 'جمبسوت رسمي أسود', brand: 'Floria Signature', category: 'أطقم', price: 290, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop', description: 'جمبسوت أنيق بقصّة واسعة لإطلالة عصرية متكاملة.', status: 'normal', inStock: true, order: 22 },
        { name: 'بلوزة كتف مكشوف', brand: 'Floria Studio', category: 'بلوزات', price: 165, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop', description: 'بلوزة بكتف مكشوف لإطلالة جريئة وأنيقة.', status: 'normal', inStock: true, order: 23 },
        { name: 'فستان ميدي كلاسيكي', brand: 'Floria Signature', category: 'فساتين كاجوال', price: 230, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop', description: 'فستان ميدي بقصّة كلاسيكية يناسب كل المناسبات.', status: 'bestseller', inStock: true, order: 24 }
    ];

    var settings = {
        whatsappNumber: '972569236758',
        heroSubtitle: 'أناقة راقية لكل امرأة، أحدث صيحات الموضة بين يديكِ',
        aboutText: 'فلوريا، وجهتكِ الأولى للأناقة النسائية الراقية في فلسطين.\nننتقي لكِ أرقى القطع من الفساتين والأطقم والإكسسوارات بلمسة فخامة عصرية.\nكل قطعة مختارة بعناية لتمنحكِ إطلالة استثنائية في كل مناسبة.',
        instagramLink: 'https://www.instagram.com/floria.fashion.ps/',
        tiktokLink: ''
    };

    function writeBatch() {
        var addBatch = db.batch();
        var productsRef = projectRef.collection('products');
        products.forEach(function (product, index) {
            var docRef = productsRef.doc(String(index + 1));
            product.id = index + 1;
            product.sizes = [
                { size: 'S', unit: 'قطعة', price: product.price },
                { size: 'M', unit: 'قطعة', price: product.price },
                { size: 'L', unit: 'قطعة', price: product.price }
            ];
            addBatch.set(docRef, product);
        });
        addBatch.set(projectRef.collection('settings').doc('general'), settings);
        addBatch.set(projectRef.collection('settings').doc('config'), settings, { merge: true });
        return addBatch.commit();
    }

    if (clearExisting) {
        console.log('Clearing existing FLORIA products...');
        return projectRef.collection('products').get().then(function (snapshot) {
            var deleteBatch = db.batch();
            snapshot.forEach(function (doc) { deleteBatch.delete(doc.ref); });
            return deleteBatch.commit();
        }).then(writeBatch).then(function () {
            console.log('Seeded ' + products.length + ' FLORIA products successfully!');
        });
    }

    return writeBatch().then(function () {
        console.log('Seeded ' + products.length + ' FLORIA products successfully!');
    });
};

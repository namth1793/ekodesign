module.exports = function seed(db) {
  const insertBlog = db.prepare(`
    INSERT INTO blog_posts (title, slug, excerpt, content, category, image_url, author)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const blogs = [
    {
      title: '5 Điều Cấm Kỵ Trong Thiết Kế Logo',
      slug: '5-dieu-cam-ky-trong-thiet-ke-logo',
      excerpt: 'Những lỗi phổ biến mà các doanh nghiệp thường mắc phải khi thiết kế logo và cách tránh chúng hiệu quả.',
      content: '<p>Logo là bộ mặt của doanh nghiệp. Một logo tốt cần đơn giản, dễ nhớ và có tính ứng dụng cao. Dưới đây là 5 điều cấm kỵ cần tránh khi thiết kế logo.</p><p><strong>1. Sử dụng quá nhiều màu sắc</strong> - Logo với quá nhiều màu sẽ khó in ấn và không nhất quán trên các nền tảng khác nhau.</p><p><strong>2. Sao chép ý tưởng</strong> - Thiếu tính nguyên bản sẽ khiến thương hiệu mất uy tín và có thể vi phạm bản quyền.</p><p><strong>3. Font chữ không phù hợp</strong> - Chọn font chữ không phù hợp với ngành nghề sẽ tạo cảm giác sai lệch cho khách hàng.</p><p><strong>4. Quá phức tạp</strong> - Logo phức tạp khó nhận biết ở kích thước nhỏ và khó in ấn.</p><p><strong>5. Thiếu tính linh hoạt</strong> - Logo cần hiển thị tốt trên cả nền trắng, đen và nhiều kích thước khác nhau.</p>',
      category: 'Kiến thức',
      image_url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
      author: 'EkoDesign Team'
    },
    {
      title: 'Xu Hướng Thiết Kế Logo 2025',
      slug: 'xu-huong-thiet-ke-logo-2025',
      excerpt: 'Khám phá những xu hướng thiết kế logo nổi bật trong năm 2025 mà mọi doanh nghiệp cần biết.',
      content: '<p>Năm 2025 chứng kiến nhiều xu hướng mới trong thiết kế logo. Từ phong cách tối giản đến gradient động, các thương hiệu đang không ngừng đổi mới.</p><p><strong>Tối giản hóa</strong> tiếp tục là xu hướng chủ đạo, với những logo đơn giản nhưng đầy ý nghĩa.</p><p><strong>Gradient màu sắc</strong> trở lại mạnh mẽ với sự phát triển của màn hình độ phân giải cao.</p><p><strong>Logo động</strong> ngày càng phổ biến trong môi trường kỹ thuật số.</p>',
      category: 'Xu hướng',
      image_url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      author: 'Nguyễn Minh Trí'
    },
    {
      title: 'Màu Sắc Trong Thiết Kế Thương Hiệu',
      slug: 'mau-sac-trong-thiet-ke-thuong-hieu',
      excerpt: 'Tìm hiểu tâm lý màu sắc và cách chọn palette màu phù hợp cho thương hiệu của bạn.',
      content: '<p>Màu sắc có tác động mạnh mẽ đến cảm xúc và quyết định mua hàng của khách hàng. Mỗi màu mang một ý nghĩa riêng trong thiết kế thương hiệu.</p><p><strong>Màu đỏ</strong>: Năng động, đam mê, kích thích - phù hợp cho thương hiệu thực phẩm, năng lượng.</p><p><strong>Màu xanh lam</strong>: Tin cậy, chuyên nghiệp - được ưa chuộng bởi các công ty tài chính, công nghệ.</p><p><strong>Màu vàng/cam</strong>: Sáng tạo, lạc quan - lý tưởng cho thương hiệu trẻ trung, sáng tạo.</p>',
      category: 'Kiến thức',
      image_url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
      author: 'Trần Thu Hà'
    },
    {
      title: 'Quy Trình Thiết Kế Logo Chuyên Nghiệp',
      slug: 'quy-trinh-thiet-ke-logo-chuyen-nghiep',
      excerpt: 'Quy trình 6 bước thiết kế logo chuyên nghiệp tại EkoDesign Studio đảm bảo kết quả tốt nhất.',
      content: '<p>Thiết kế logo chuyên nghiệp là một quá trình có hệ thống, không phải chỉ đơn giản là vẽ một hình ảnh đẹp. Dưới đây là quy trình 6 bước tại EkoDesign Studio.</p><p><strong>Bước 1: Brief & Nghiên cứu</strong> - Tìm hiểu kỹ về doanh nghiệp, đối thủ cạnh tranh và khách hàng mục tiêu.</p><p><strong>Bước 2: Phác thảo ý tưởng</strong> - Tạo nhiều ý tưởng sáng tạo khác nhau.</p><p><strong>Bước 3: Phát triển concept</strong> - Chọn lọc và phát triển 3-5 concept tốt nhất.</p><p><strong>Bước 4: Trình bày & Phản hồi</strong> - Nhận phản hồi và điều chỉnh theo yêu cầu.</p><p><strong>Bước 5: Hoàn thiện</strong> - Tinh chỉnh chi tiết cuối cùng.</p><p><strong>Bước 6: Bàn giao</strong> - Cung cấp đầy đủ file và hướng dẫn sử dụng.</p>',
      category: 'Quy trình',
      image_url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
      author: 'EkoDesign Team'
    },
    {
      title: 'Khi Nào Doanh Nghiệp Cần Tái Thiết Kế Logo?',
      slug: 'khi-nao-doanh-nghiep-can-tai-thiet-ke-logo',
      excerpt: 'Dấu hiệu nhận biết logo của bạn đã lỗi thời và cần được cập nhật để phù hợp với thị trường.',
      content: '<p>Có những thời điểm logo cũ không còn phù hợp và doanh nghiệp cần cân nhắc tái thiết kế. Dưới đây là những dấu hiệu rõ ràng nhất.</p><p><strong>1. Logo trông lỗi thời</strong> - Thiết kế không bắt kịp xu hướng hiện đại.</p><p><strong>2. Mở rộng thị trường</strong> - Logo không phù hợp với văn hóa thị trường mới.</p><p><strong>3. Thay đổi định hướng kinh doanh</strong> - Logo cũ không còn phản ánh đúng giá trị thương hiệu.</p><p><strong>4. Logo khó ứng dụng digital</strong> - Không hiển thị tốt trên các nền tảng kỹ thuật số.</p>',
      category: 'Tư vấn',
      image_url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      author: 'Lê Quang Hùng'
    },
    {
      title: 'Brand Identity vs Logo: Sự Khác Biệt Cần Biết',
      slug: 'brand-identity-vs-logo-su-khac-biet',
      excerpt: 'Nhiều người nhầm lẫn logo với nhận diện thương hiệu. Bài viết này sẽ giải thích rõ sự khác biệt.',
      content: '<p>Logo chỉ là một phần trong hệ thống nhận diện thương hiệu (Brand Identity). Hiểu rõ sự khác biệt sẽ giúp doanh nghiệp đầu tư đúng hướng.</p><p><strong>Logo</strong> là biểu tượng đại diện cho thương hiệu - một hình ảnh, chữ viết hoặc kết hợp cả hai.</p><p><strong>Brand Identity</strong> bao gồm: logo, màu sắc, typography, tone of voice, bao bì, văn phòng phẩm và mọi điểm tiếp xúc với khách hàng.</p><p>Một thương hiệu mạnh cần cả hai yếu tố được thiết kế đồng bộ và nhất quán.</p>',
      category: 'Kiến thức',
      image_url: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
      author: 'EkoDesign Team'
    }
  ];

  const insertPortfolio = db.prepare(`
    INSERT INTO portfolio (client_name, industry, description, image_url, tags, featured)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const portfolioItems = [
    { client_name: 'Petimex Group', industry: 'Dầu khí', description: 'Thiết kế logo và bộ nhận diện thương hiệu toàn diện cho tập đoàn dầu khí hàng đầu.', image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', tags: 'Logo,Brand Identity,Dầu khí', featured: 1 },
    { client_name: 'Sunrise Sapa Hotel', industry: 'Khách sạn', description: 'Bộ nhận diện thương hiệu cao cấp cho khách sạn 5 sao tại Sapa với phong cách tối giản sang trọng.', image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', tags: 'Logo,Khách sạn,Luxury', featured: 1 },
    { client_name: 'VGN Medical', industry: 'Y tế', description: 'Logo chuyên nghiệp và hệ thống nhận diện cho chuỗi phòng khám y tế hiện đại.', image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', tags: 'Logo,Y tế,Healthcare', featured: 1 },
    { client_name: '92Wear Fashion', industry: 'Thời trang', description: 'Thương hiệu thời trang trẻ trung với logo hiện đại và bộ nhận diện năng động.', image_url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80', tags: 'Logo,Thời trang,Fashion', featured: 1 },
    { client_name: 'GreenFarm Foods', industry: 'Thực phẩm', description: 'Thiết kế bao bì và nhận diện thương hiệu cho dòng sản phẩm organic cao cấp.', image_url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80', tags: 'Logo,Thực phẩm,Organic', featured: 1 },
    { client_name: 'TechViet Solutions', industry: 'Công nghệ', description: 'Logo và brand identity cho startup công nghệ với phong cách hiện đại, sáng tạo.', image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', tags: 'Logo,Công nghệ,Startup', featured: 1 },
    { client_name: 'BlueSky Edu', industry: 'Giáo dục', description: 'Hệ thống nhận diện thương hiệu cho trung tâm giáo dục với thiết kế thân thiện, hiện đại.', image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', tags: 'Logo,Giáo dục,Education', featured: 0 },
    { client_name: 'Vinland Real Estate', industry: 'Bất động sản', description: 'Logo cao cấp và bộ nhận diện chuyên nghiệp cho công ty bất động sản hạng sang.', image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', tags: 'Logo,Bất động sản,Luxury', featured: 0 },
    { client_name: 'PharmaPlus', industry: 'Dược phẩm', description: 'Thiết kế logo và nhận diện cho chuỗi nhà thuốc hiện đại trên toàn quốc.', image_url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', tags: 'Logo,Dược phẩm,Pharmacy', featured: 0 },
    { client_name: 'LogiTrans Vietnam', industry: 'Vận tải', description: 'Nhận diện thương hiệu mạnh mẽ cho công ty logistics và vận tải hàng đầu miền Bắc.', image_url: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=600&q=80', tags: 'Logo,Vận tải,Logistics', featured: 0 },
    { client_name: 'EcoHomes', industry: 'Xây dựng', description: 'Logo xanh, thân thiện môi trường cho doanh nghiệp xây dựng nhà ở sinh thái.', image_url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', tags: 'Logo,Xây dựng,Eco', featured: 0 },
    { client_name: 'LegalPro Law Firm', industry: 'Pháp lý', description: 'Thiết kế logo uy tín, chuyên nghiệp cho văn phòng luật sư hàng đầu tại Hà Nội.', image_url: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80', tags: 'Logo,Pháp lý,Law', featured: 0 }
  ];

  const insertTestimonial = db.prepare(`
    INSERT INTO testimonials (client_name, company, content, rating, avatar_url)
    VALUES (?, ?, ?, ?, ?)
  `);

  const testimonials = [
    { client_name: 'Nguyễn Văn An', company: 'Petimex Group', content: 'EkoDesign đã tạo ra một logo hoàn toàn vượt ngoài kỳ vọng của chúng tôi. Đội ngũ rất chuyên nghiệp và lắng nghe yêu cầu kỹ lưỡng.', rating: 5, avatar_url: 'https://i.pravatar.cc/80?img=1' },
    { client_name: 'Trần Thị Bình', company: 'Sunrise Sapa Hotel', content: 'Bộ nhận diện thương hiệu mà EkoDesign thiết kế cho chúng tôi rất sang trọng và phù hợp với định vị cao cấp của khách sạn.', rating: 5, avatar_url: 'https://i.pravatar.cc/80?img=5' },
    { client_name: 'Lê Minh Cường', company: 'TechViet Solutions', content: 'Quy trình làm việc rất chuyên nghiệp, phản hồi nhanh và sản phẩm cuối cùng xuất sắc. Rất hài lòng với dịch vụ!', rating: 5, avatar_url: 'https://i.pravatar.cc/80?img=3' },
    { client_name: 'Phạm Thu Hương', company: '92Wear Fashion', content: 'Logo và bộ brand identity hoàn toàn phản ánh đúng tinh thần trẻ trung và năng động của thương hiệu chúng tôi.', rating: 5, avatar_url: 'https://i.pravatar.cc/80?img=9' },
    { client_name: 'Hoàng Đức Nam', company: 'VGN Medical', content: 'Chúng tôi cần một logo vừa chuyên nghiệp vừa thân thiện. EkoDesign đã làm được điều đó một cách hoàn hảo!', rating: 5, avatar_url: 'https://i.pravatar.cc/80?img=12' },
    { client_name: 'Vũ Lan Anh', company: 'GreenFarm Foods', content: 'Đội ngũ sáng tạo, nhiệt tình và am hiểu thị trường. Bao bì sản phẩm mới của chúng tôi tăng doanh số rõ rệt!', rating: 5, avatar_url: 'https://i.pravatar.cc/80?img=25' }
  ];

  const seedBlog = db.transaction(() => {
    for (const b of blogs) {
      insertBlog.run(b.title, b.slug, b.excerpt, b.content, b.category, b.image_url, b.author);
    }
  });

  const seedPortfolio = db.transaction(() => {
    for (const p of portfolioItems) {
      insertPortfolio.run(p.client_name, p.industry, p.description, p.image_url, p.tags, p.featured);
    }
  });

  const seedTestimonials = db.transaction(() => {
    for (const t of testimonials) {
      insertTestimonial.run(t.client_name, t.company, t.content, t.rating, t.avatar_url);
    }
  });

  seedBlog();
  seedPortfolio();
  seedTestimonials();

  console.log('Database seeded successfully!');
};

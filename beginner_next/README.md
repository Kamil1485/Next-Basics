Next js Konuları

development modunda calıstır.
npm run dev,
**************************************************************************************************************
1-Routing işlemleri
Next.js, Routing tanımlamak için klasörlerin kullanıldığı dosya sistemi tabanlı bir yönlendirici kullanır .

Yönlendirme(Routing) için en yaygın kullanılan yöntem, dosya sistemine dayalı yönlendirmedir.
Next.js projenizde "pages" adlı bir klasör oluşturduğunuzda, içindeki dosyalar otomatik olarak yönlendirme için kullanılabilir hale gelir.
Örneğin, "pages/about.js" dosyası "/about" URL'siyle eşleşir ve kullanıcının "/about" sayfasına yönlendirilmesini sağlar.

1a)Static Routing
Statik yönlendirme, her istek için sunulan aynı sayfayı gösteren basit bir yönlendirme türüdür.
"pages/blog.js" adında bir dosya oluşturarak statik bir blog sayfası oluşturabilirsiniz.
Bu içerik, projeniz derlendiğinde oluşturulur ve her kullanıcıya aynı içerik sunulur.

1b)Dynamic Routing
Dinamik yönlendirme, URL parametrelerini kullanarak dinamik olarak içerik oluşturmanızı sağlar. Bu tür yönlendirmede, URL'de belirli bir parçanın değeri değiştiğinde, içerik dinamik olarak oluşturulur veya alınır. 
pages/products/[productId].js" adında bir dosya oluşturarak dinamik bir ürün sayfası oluşturabilirsiniz. Bu dosyada, [productId] özel parametresini kullanarak URL'den ürün kimliğini alabilir ve bu kimliğe göre ilgili ürünün içeriğini getirebilirsiniz. 


1c)Catch-all yönlendirme, dinamik parametrelerin yanı sıra dinamik parametreyi takip eden ekstra parçaları da yakalayabilir. Bu durumda, "catch-all" parametresi kullanılır. Catch-all parametresi, köşeli parantez içinde üç nokta ([...paramName]) kullanılarak tanımlanır.

Örneğin, /products/123/reviews, /products/456/comments gibi URL'lerde "products" sabit bir parça ve "123" veya "456" gibi bir ürün kimliği vardır, ancak "reviews" veya "comments" gibi ek parçalar da vardır.

1d)Optional catch overalls
Optional catch-all parametresi, dinamik yönlendirmede parametrelerin opsiyonel olmasını sağlar.
Yani, bir URL'de belirli bir parçanın var olup olmadığına bakmaksızın eşleşme sağlanır.
üç nokta ve bir soru işareti ([[...paramName]]) kullanılarak tanımlanır.

1e)Linking and Navigating


**************************************************************************************************************

window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }
  
    const products = [
      {
        id: 1,
        title: 'NIKE',
        description: 'With Reacts core it is easy to',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/products/NIKE_AA0286-001__83661_1539108322.png',
      },
      {
        id: 2,
        title: 'NIKE',
        description: 'With Reacts core it is easy to',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/products/NIKE_AA0286-001__83661_1539108322.png',
      },
      {
        id: 3,
        title: 'NIKE',
        description: 'With Reacts core it is easy to',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/products/NIKE_AA0286-001__83661_1539108322.png',
      },
      {
        id: 4,
        title: 'NIKE',
        description: 'With Reacts core it is easy to',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/products/NIKE_AA0286-001__83661_1539108322.png',
      },
      {
        id: 5,
        title: 'NIKE',
        description: 'With Reacts core it is easy to',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/products/NIKE_AA0286-001__83661_1539108322.png',
      },

    ];
    
  
    return { products: products };
  }());
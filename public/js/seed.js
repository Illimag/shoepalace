window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }
  
    const products = [
      {
        id: 1,
        title: 'Cloud©',
        description: 'The On icon for all-day performance..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoe0/l-01.png',
      },
      {
        id: 2,
        title: 'Cloud©',
        description: 'The On icon for all-day performance..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoe1/l-02.png',
      },
      {
        id: 3,
        title: 'Mudclaw©',
        description: 'The worlds toughest grip * Lightweight..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoe2/l-03.png',
      },
      {
        id: 4,
        title: 'Asics©',
        description: 'The worlds toughest grip * Lightweight..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoe3/l-04.png',
      },
      {
        id: 5,
        title: 'Under Armour©',
        description: 'Like with most Under Armour sneakers..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoe4/l-05.png',
      },
      {
        id: 6,
        title: 'Jordan©',
        description: 'MULTI-SURFACE PERFORMANCE. The Jordan..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoe6/l-06.png',
      },
      {
        id: 7,
        title: 'Jordan©',
        description: 'A NEW LOOK FOR JORDAN GOLF. Make..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoe8/l-07.png',
      },
      {
        id: 8,
        title: 'NIKE©',
        description: 'A NEW LOOK FOR JORDAN GOLF. Make..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoe9/l-08.png',
      },

    ];
    
  
    return { products: products };
  }());
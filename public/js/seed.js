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
       productImageUrl: 'images/shoes/shoepalace-01.png',
      },
      {
        id: 2,
        title: 'Cloud©',
        description: 'The On icon for all-day performance..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoepalace-02.png',
      },
      {
        id: 3,
        title: 'MudC©',
        description: 'The worlds toughest grip * Lightweight..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoepalace-03.png',
      },
      {
        id: 4,
        title: 'Asics©',
        description: 'The worlds toughest grip * Lightweight..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoepalace-04.png',
      },
      {
        id: 5,
        title: 'Under Armour©',
        description: 'Like with most Under Armour sneakers..',
        url: '#',
        votes: generateVoteCount(),
       productImageUrl: 'images/shoes/shoepalace-05.png',
      },

    ];
    
  
    return { products: products };
  }());
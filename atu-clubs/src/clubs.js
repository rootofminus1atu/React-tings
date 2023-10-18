export const clubs = [
    {
        id: '1',
        name: 'Fishing Club',
        description: `Experience the tranquility of local waters with the Fishing Club, under the guidance of the enthusiastic angler, Perrell Brown aka Dreamy. Discover the art of fishing, whether you're a novice or an expert, in a welcoming and relaxed atmosphere.`,
        img: 'fishing-club.webp',
        full: false
    },
    {
        id: '2',
        name: 'Golf Club',
        description: `Join the Golf Club, featuring a special guest appearance by the one and only DJ Khaled. Tee off on our picturesque golf course, regardless of your skill level. Our club offers a welcoming and enjoyable environment for golf enthusiasts to relax and improve their skills.`,
        img: 'golf-club.jpeg',
        full: true
    },
    {
        id: '3',
        name: 'Chemistry Club',
        description: `Explore the fascinating world of chemistry with the Chemistry Club, where you'll receive exclusive private lessons from the legendary duo, Walter White and Jesse Pinkman. Uncover the science behind everything and take advantage of this unique opportunity to learn from the best in the field.`,
        img: 'chem-club.jpg',
        full: false
    },
    {
        id: '4',
        name: 'Military Club',
        description: `Join the Military Club, where we've got you covered if you need more bullets, if you need bigger weapons, or if you need protein. Under the leadership of the fearless Mr. Morboulez, you'll delve into military tactics, discipline, and strength training.`,
        img: 'military-club.jpg',
        full: false
    },
]

export function getClubWithId(id) {
    return clubs.filter(club => club.id === id)[0]
}
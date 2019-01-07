const DELAY = 2000

export default () => {
  const createShow = () => {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      resolve({
        res: [{
          id: 20,
          title: 'Test Titl3e',
          description: 'Lorems ipsum....',
          short_description: 'lor ips'
        }]
      })
      // }, DELAY)
    })
  }

  const getShow = (id) => {
    return {
      res: {
        show: {
          id: 3, title: 'Test Title', description: 'Lorems ipsum....', short_description: 'lor ips'
        },
        seasons: [
          {
            id: 21,
            show_id: 3
          },
          {
            id: 22,
            show_id: 3
          }
        ],
        episodes: [
          {
            id: 101,
            title: 'episode 1_1',
            season_id: 21
          },
          {
            id: 104,
            title: 'episode 2_1',
            season_id: 22
          }

        ]
      }
    }
  }

  return {
    createShow: createShow,
    getShow: getShow
  }
}
// setTimeout(()=>{
//   resolve(Object.assign([], [{id: 20, title: 'Test Titl3e', description: 'Lorems ipsum....', short_description: 'lor ips'}]))
// },DELAY)

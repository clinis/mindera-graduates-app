const events = [
  {
    title: 'Open Day \'18',
    days: ['Day 01', 'Day 02', 'Day 03', 'Day 4', 'Day 5']
  },
  {
    title: 'Graduate Program',
    days: ['First day', 'Second day', 'Last day']
  },
  {
    title: 'Meet Mindera Code & Culture',
    days: ['Day 19', 'Day 20']
  },
]

const lists = ['List 01', 'List 02', 'List 03', 'List 04', 'List 05', 'List 06', 'List 07', 'List 08', 'List 09', 'List 10']

const items = ['Description 01', 'Description 02', 'Description 03', 'Description 04', 'Description 05', 'Description 06', 'Description 07', 'Description 08']

function getEvents () {
  return new Promise((res, rej) => {
    setTimeout(() => res(events), 500)
  })
}

function getDayLists () {
  return lists
}

function getListItems () {
  return items
}

module.exports = {
  getEvents, getDayLists, getListItems
}
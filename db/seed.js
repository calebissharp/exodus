const { prisma } = require('./generated')

const bannedPhrases = [
  {
    test: '😂',
    phrase: '😂'
  },
  {
    test: '😹',
    phrase: '😹'
  },
  {
    test: '😳',
    phrase: '😳'
  },
  {
    test: '😅',
    phrase: '😅'
  },
  {
    test: '🤣',
    phrase: '🤣'
  },
  {
    test: '😆',
    phrase: '😆'
  },
  {
    test: '😜',
    phrase: '😜'
  },
  {
    test: '😝',
    phrase: '😝'
  },
  {
    test: '😛',
    phrase: '😛'
  },
  {
    test: 'o\\s*m\\s*',
    phrase: 'omg'
  },
  {
    test: 'h\\s*a\\s*h\\s*a',
    phrase: 'haha'
  },
  {
    test: 'b\\s*a\\s*b\\s*e',
    phrase: 'babe'
  }
]

bannedPhrases.map(async phrase => {
  await prisma.createBannedPhrase({
    ...phrase,
    test: phrase.test.toString()
  })
})

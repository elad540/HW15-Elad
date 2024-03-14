import { loremIpsum } from "lorem-ipsum"
import ShortUniqueId from "short-unique-id"

function generateLorem(words = 100) {
  const randomText = loremIpsum({ count: words, units: "words" })
  return randomText
}

function generateId(length = 10) {
  const { randomUUID } = new ShortUniqueId()
  return randomUUID(length)
}

export const utilService = { generateLorem, generateId }

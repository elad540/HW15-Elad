import { storageService } from "./storageService.js"
import { utilService } from "./utilService"

function createUser(username, email, password, avatar = "") {
  const newUser = {
    id: utilService.generateId(),
    username,
    password,
    email,
    avatar,
    isAdmin: false,
    createdAt: new Date(),
  }
  const totalUsers = storageService.getUsers()
  storageService.saveUsers([...totalUsers, newUser])
}

function login(username, password) {
  const users = storageService.getUsers()
  const foundedUser = users.find(
    (user) => user.password === password && user.username === username
  )

  if (!foundedUser) return null
  storageService.saveLoggedInUser(foundedUser)
  return foundedUser
}

function logout() {
  storageService.clearAll()
}

export const userService = { createUser, login, logout }

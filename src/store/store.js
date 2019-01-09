import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    loggedUserId: -1,
    courses: [],
    tags: []
  },
  getters: {
    getUserById: state => id => {
      return state.users.find(user => user.id === id)
    },
    getUserByUsername: state => username => {
      return state.users.find(user => user.username.toLowerCase() === username.toLowerCase())
    },
    getUserByEmail: state => email => {
      return state.users.find(user => user.email.toLowerCase() === email.toLowerCase())
    },
    getLoggedUserId: state => state.loggedUserId,
    getLastUserId: state => {
      let lastId = 0
      if (state.users.length) {
        state.users.forEach(user => {
          if (user.id >= lastId) {
            lastId = user.id
          }
        })
      }
      return lastId
    },
    getUsers: state => {
      return state.users
    },
    getCourses: state => {
      return state.courses
    },
    getLastCourseId: state => {
      let lastId = 0
      if (state.courses.length) {
        state.courses.forEach(course => {
          if (course.id >= lastId) {
            lastId = course.id
          }
        })
      }
      return lastId
    },
    getCourseById: state => id => {
      return state.courses.find(course => course.id === id)
    },
    getCourseByName: state => name => {
      return state.courses.find(course => course.name.toLowerCase() === name.toLowerCase())
    },
    getCourseByAbbreviation: state => abbreviation => {
      return state.courses.find(course => course.abbreviation.toLowerCase() === abbreviation.toLowerCase())
    },
    getTags: state => {
      return state.tags
    },
    getLastTagId: state => {
      let lastId = 0
      if (state.tags.length) {
        state.tags.forEach(tag => {
          if (tag.id >= lastId) {
            lastId = tag.id
          }
        })
      }
      return lastId
    },
    getTagById: state => id => {
      return state.tags.find(tag => tag.id === id)
    },
    getTagByName: state => name => {
      return state.tags.find(tag => tag.name.toLowerCase() === name.toLowerCase())
    }
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload
    },
    USER_LOGGED_IN(state, payload) {
      state.loggedUserId = payload
    },
    USER_LOGGED_OUT(state) {
      state.loggedUserId = -1
    },
    SIGNED_UP(state, payload) {
      state.users.push(payload)
    },
    CREATED_ACCOUNT(state, payload) {
      state.users.push(payload)
    },
    SET_COURSES(state, payload) {
      state.courses = payload
    },
    ADD_COURSE(state, payload) {
      state.courses.push(payload)
    },
    EDIT_COURSE(state, payload) {
      state.courses.forEach(course => {
        if (course.id === payload.id) {
          course.name = payload.name
          course.abbreviation = payload.abbreviation
        }
      })
    },
    REMOVE_COURSE_BY_ID(state, payload) {
      state.courses.forEach((course, index) => {
        if (course.id === payload) state.courses.splice(index, 1)
      })
    },
    SET_TAGS(state, payload) {
      state.tags = payload
    },
    ADD_TAG(state, payload) {
      state.tags.push(payload)
    },
    EDIT_TAG(state, payload) {
      state.tags.forEach(tag => {
        if (tag.id === payload.id) tag.name = payload.name
      })
    },
    REMOVE_TAG_BY_ID(state, payload) {
      state.tags.forEach((tag, index) => {
        if (tag.id === payload) state.tags.splice(index, 1)
      })
    },
  },
  actions: {
    setUsers(context, payload) {
      context.commit("SET_USERS", payload)
    },
    userLoggedIn(context, payload) {
      context.commit("USER_LOGGED_IN", payload)
    },
    userLoggedOut(context, payload) {
      context.commit("USER_LOGGED_OUT", payload)
    },
    signUp(context, payload) {
      context.commit("SIGNED_UP", payload)
    },
    createAccount(context, payload) {
      context.commit("CREATED_ACCOUNT", payload)
    },
    setCourses(context, payload) {
      context.commit("SET_COURSES", payload)
    },
    addCourse(context, payload) {
      context.commit("ADD_COURSE", payload)
    },
    editCourse(context, payload) {
      context.commit("EDIT_COURSE", payload)
    },
    removeCourseById(context, payload) {
      context.commit("REMOVE_COURSE_BY_ID", payload)
    },
    setTags(context, payload) {
      context.commit("SET_TAGS", payload)
    },
    addTag(context, payload) {
      context.commit("ADD_TAG", payload)
    },
    editTag(context, payload) {
      context.commit("EDIT_TAG", payload)
    },
    removeTagById(context, payload) {
      context.commit("REMOVE_TAG_BY_ID", payload)
    }
  }
})
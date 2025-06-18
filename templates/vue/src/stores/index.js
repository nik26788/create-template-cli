import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: false,
    user: null,
    notifications: []
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.user,
    notificationCount: (state) => state.notifications.length
  },
  
  actions: {
    setLoading(status) {
      this.isLoading = status
    },
    
    login(userData) {
      // In a real app, this would handle authentication
      this.user = userData
    },
    
    logout() {
      this.user = null
    },
    
    addNotification(notification) {
      this.notifications.push({
        id: Date.now(),
        read: false,
        ...notification
      })
    },
    
    markNotificationAsRead(id) {
      const notification = this.notifications.find(n => n.id === id)
      if (notification) {
        notification.read = true
      }
    },
    
    clearNotifications() {
      this.notifications = []
    }
  }
}) 
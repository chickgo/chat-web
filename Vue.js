<template>
  <div class="chat-container">
    <div class="login-panel" v-if="!isLoggedIn">
      <h2>登录</h2>
      <input v-model="username" placeholder="用户名">
      <input v-model="password" type="password" placeholder="密码">
      <button @click="login">登录</button>
      <button @click="showRegister">注册</button>
    </div>
    <div class="chat-panel" v-else>
      <div class="online-users">在线用户: {{ onlineUsers }}</div>
      <div class="messages" v-for="message in messages" :key="message.id">
        <span class="user">{{ message.user }}</span>: {{ message.text }}
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="输入消息">
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false,
      onlineUsers: 0,
      messages: [],
      newMessage: ''
    };
  },
  methods: {
    login() {
      // 登录逻辑
      this.isLoggedIn = true;
      this.fetchMessages();
    },
    showRegister() {
      // 显示注册面板
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({
          user: this.username,
          text: this.newMessage,
          timestamp: new Date().toISOString()
        });
        this.newMessage = '';
      }
    },
    fetchMessages() {
      // 从服务器获取消息
    }
  }
};
</script>

<style>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.login-panel, .chat-panel {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
import React, { useState, useEffect, useRef } from 'react';
import {
  Send, Plus, X, Settings, LogOut, Hash, Volume2, Search, Bell,
  Phone, Video, MoreVertical, Smile, Paperclip, ChevronDown,
  Eye, EyeOff, Mail, Lock, User, Users, MessageSquare,
  Mic, MicOff, Headphones, Settings2, Copy, Pin, Edit, Trash2,
  Reply, MessageCircle, AlertCircle, Clock, Zap
} from 'lucide-react';

export default function DiscordEnhanced() {
  const [language, setLanguage] = useState('vi');

  const translations = {
    vi: {
      email: 'Email',
      password: 'Mật khẩu',
      fullName: 'Họ và tên',
      confirmPassword: 'Xác nhận mật khẩu',
      login: 'Đăng nhập',
      register: 'Đăng ký',
      loginNow: 'Bạn đã có tài khoản? Đăng nhập',
      registerNow: 'Bạn chưa có tài khoản? Đăng ký',
      error: 'Lỗi',
      success: 'Thành công',
      fillAllFields: 'Vui lòng điền tất cả các trường',
      passwordMismatch: 'Mật khẩu không khớp',
      passwordMinLength: 'Mật khẩu phải có ít nhất 6 ký tự',
      emailExists: 'Email đã được đăng ký',
      registerSuccess: 'Đăng ký thành công! Vui lòng đăng nhập',
      invalidCredentials: 'Email hoặc mật khẩu không chính xác',
      emptyEmail: 'Vui lòng nhập email và mật khẩu',
      emailNotFound: 'Email không tồn tại',
      selfAdd: 'Không thể thêm chính mình',
      alreadyFriend: 'Đã là bạn bè',
      addFriendSuccess: 'Đã thêm bạn bè',
      demoAccount: 'Demo: alice@example.com / 123456',
      directMessages: 'TIN NHẮN TRỰC TIẾP',
      servers: 'MÁY CHỦ',
      friends: 'Bạn bè',
      online: 'Online',
      offline: 'Offline',
      away: 'Đang bận',
      addFriend: 'Thêm bạn bè',
      friendEmail: 'Email bạn bè',
      sendMessage: 'Gửi lời mời',
      noFriends: 'Chưa có bạn bè',
      selectChat: 'Chọn cuộc trò chuyện',
      messageHere: 'Nhắn tin tại đây...',
      settings: 'Cài đặt',
      logout: 'Đăng xuất',
      search: 'Tìm kiếm',
      language: 'Ngôn ngữ',
      createServer: 'Tạo mới máy chủ',
      serverName: 'Tên máy chủ',
      channels: 'Kênh',
      newChannel: 'Kênh mới',
      channelName: 'Tên kênh',
      text: 'Văn bản',
      voice: 'Thoại',
      members: 'Thành viên',
      voiceChannel: 'Kênh thoại',
      connected: 'Đã kết nối',
      edit: 'Sửa',
      delete: 'Xóa',
      reply: 'Trả lời',
      reactions: 'Phản ứng',
      edited: 'Đã sửa',
      replyTo: 'Trả lời',
      typing: 'đang gõ...',
      messageDeleted: 'Tin nhắn đã bị xóa',
      messageEdited: 'Tin nhắn đã được sửa',
      pinned: 'Đã ghim',
      theme: 'Giao diện',
      darkMode: 'Tối',
      lightMode: 'Sáng',
    },
    en: {
      email: 'Email',
      password: 'Password',
      fullName: 'Full Name',
      confirmPassword: 'Confirm Password',
      login: 'Login',
      register: 'Register',
      loginNow: 'Already have an account? Login',
      registerNow: "Don't have an account? Register",
      error: 'Error',
      success: 'Success',
      fillAllFields: 'Please fill all fields',
      passwordMismatch: 'Passwords do not match',
      passwordMinLength: 'Password must be at least 6 characters',
      emailExists: 'Email already registered',
      registerSuccess: 'Registration successful! Please login',
      invalidCredentials: 'Invalid email or password',
      emptyEmail: 'Please enter email and password',
      emailNotFound: 'Email not found',
      selfAdd: 'Cannot add yourself',
      alreadyFriend: 'Already friends',
      addFriendSuccess: 'Friend added',
      demoAccount: 'Demo: alice@example.com / 123456',
      directMessages: 'DIRECT MESSAGES',
      servers: 'SERVERS',
      friends: 'Friends',
      online: 'Online',
      offline: 'Offline',
      away: 'Away',
      addFriend: 'Add Friend',
      friendEmail: 'Friend Email',
      sendMessage: 'Send Invite',
      noFriends: 'No friends',
      selectChat: 'Select a chat',
      messageHere: 'Message here...',
      settings: 'Settings',
      logout: 'Logout',
      search: 'Search',
      language: 'Language',
      createServer: 'Create Server',
      serverName: 'Server Name',
      channels: 'Channels',
      newChannel: 'New Channel',
      channelName: 'Channel Name',
      text: 'Text',
      voice: 'Voice',
      members: 'Members',
      voiceChannel: 'Voice Channel',
      connected: 'Connected',
      edit: 'Edit',
      delete: 'Delete',
      reply: 'Reply',
      reactions: 'Reactions',
      edited: 'edited',
      replyTo: 'Replying to',
      typing: 'is typing...',
      messageDeleted: 'Message deleted',
      messageEdited: 'Message edited',
      pinned: 'Pinned',
      theme: 'Theme',
      darkMode: 'Dark',
      lightMode: 'Light',
    },
  };

  const t = (key) => translations[language][key] || key;
  const emojis = ['😀', '😂', '😍', '🤔', '😢', '🎉', '👍', '❤️', '🔥', '⭐'];

  // State Management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [servers, setServers] = useState([]);
  const [activeServer, setActiveServer] = useState(null);
  const [activeChannel, setActiveChannel] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputMessage, setInputMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [addFriendEmail, setAddFriendEmail] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [userStatus, setUserStatus] = useState('online');
  const [voiceConnected, setVoiceConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);
  const [showServerCreate, setShowServerCreate] = useState(false);
  const [showChannelCreate, setShowChannelCreate] = useState(false);
  const [newServerName, setNewServerName] = useState('');
  const [newChannelName, setNewChannelName] = useState('');
  const [newChannelType, setNewChannelType] = useState('text');
  const [theme, setTheme] = useState('dark');
  
  // New features
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [replyingToId, setReplyingToId] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(null);
  const [messageReactions, setMessageReactions] = useState({});
  const [typingUsers, setTypingUsers] = useState({});
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  // Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const messagesEndRef = useRef(null);

  // Initialize
  useEffect(() => {
    const existingUsers = localStorage.getItem('users');
    if (!existingUsers) {
      const sampleUsers = [
        {
          id: 1,
          email: 'alice@example.com',
          password: '123456',
          name: 'Alice Nguyễn',
          avatar: '👩‍💻',
          status: 'online',
          badge: 'Developer',
          friends: [2, 3],
        },
        {
          id: 2,
          email: 'bob@example.com',
          password: '123456',
          name: 'Bob Trần',
          avatar: '👨‍🎨',
          status: 'online',
          badge: 'Designer',
          friends: [1],
        },
        {
          id: 3,
          email: 'carol@example.com',
          password: '123456',
          name: 'Carol Lê',
          avatar: '👩‍🚀',
          status: 'away',
          badge: 'Artist',
          friends: [1],
        },
      ];
      localStorage.setItem('users', JSON.stringify(sampleUsers));
      setAllUsers(sampleUsers);
    } else {
      setAllUsers(JSON.parse(existingUsers));
    }

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setCurrentUser(user);
      setIsLoggedIn(true);
      setShowLoginForm(false);
      loadUserFriends(user.id);
      loadUserServers();
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeChannel]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSampleServers = () => {
    return [
      {
        id: 1,
        name: 'Code Masters',
        icon: '💻',
        owner: 1,
        channels: [
          { id: 11, name: 'general', type: 'text' },
          { id: 12, name: 'announcements', type: 'text' },
          { id: 13, name: 'voice-dev', type: 'voice' },
        ],
        members: [1, 2, 3],
        isFavorite: true,
      },
      {
        id: 2,
        name: 'Design Squad',
        icon: '🎨',
        owner: 2,
        channels: [
          { id: 21, name: 'design-talk', type: 'text' },
          { id: 22, name: 'ui-ux', type: 'text' },
        ],
        members: [1, 2, 3],
        isFavorite: false,
      },
    ];
  };

  const loadUserServers = () => {
    const saved = localStorage.getItem('user_servers');
    if (saved) {
      setServers(JSON.parse(saved));
    } else {
      const defaultServers = getSampleServers();
      localStorage.setItem('user_servers', JSON.stringify(defaultServers));
      setServers(defaultServers);
    }
  };

  const loadUserFriends = (userId) => {
    const usersList = JSON.parse(localStorage.getItem('users'));
    const user = usersList.find((u) => u.id === userId);
    if (user && user.friends && user.friends.length > 0) {
      const userFriends = usersList.filter((u) => user.friends.includes(u.id));
      setFriends(userFriends);
    } else {
      setFriends([]);
    }
  };

  // Auth Functions
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!loginEmail || !loginPassword) {
      setError(t('emptyEmail'));
      return;
    }

    const user = allUsers.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (!user) {
      setError(t('invalidCredentials'));
      return;
    }

    setCurrentUser(user);
    setIsLoggedIn(true);
    setShowLoginForm(false);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    loadUserFriends(user.id);
    loadUserServers();
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!registerName || !registerEmail || !registerPassword || !registerPasswordConfirm) {
      setError(t('fillAllFields'));
      return;
    }

    if (registerPassword !== registerPasswordConfirm) {
      setError(t('passwordMismatch'));
      return;
    }

    if (registerPassword.length < 6) {
      setError(t('passwordMinLength'));
      return;
    }

    if (allUsers.find((u) => u.email === registerEmail)) {
      setError(t('emailExists'));
      return;
    }

    const badges = ['Developer', 'Designer', 'Artist', 'Gamer'];
    const avatars = ['👨‍💻', '👩‍🎨', '🧑‍🚀', '👨‍🎮'];

    const newUser = {
      id: Date.now(),
      email: registerEmail,
      password: registerPassword,
      name: registerName,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      status: 'online',
      friends: [],
      badge: badges[Math.floor(Math.random() * badges.length)],
    };

    const updatedUsers = [...allUsers, newUser];
    setAllUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setSuccess(t('registerSuccess'));

    setTimeout(() => {
      setRegisterName('');
      setRegisterEmail('');
      setRegisterPassword('');
      setRegisterPasswordConfirm('');
      setShowLoginForm(true);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setShowLoginForm(true);
    setFriends([]);
    setMessages({});
    setActiveChannel(null);
    setActiveServer(null);
    setVoiceConnected(false);
    localStorage.removeItem('loggedInUser');
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    setError('');

    if (!addFriendEmail) {
      setError(t('friendEmail'));
      return;
    }

    const friendUser = allUsers.find((u) => u.email === addFriendEmail);

    if (!friendUser) {
      setError(t('emailNotFound'));
      return;
    }

    if (friendUser.id === currentUser.id) {
      setError(t('selfAdd'));
      return;
    }

    if (friends.find((f) => f.id === friendUser.id)) {
      setError(t('alreadyFriend'));
      return;
    }

    const updatedUsers = allUsers.map((u) => {
      if (u.id === currentUser.id) {
        return { ...u, friends: [...(u.friends || []), friendUser.id] };
      }
      if (u.id === friendUser.id) {
        return { ...u, friends: [...(u.friends || []), currentUser.id] };
      }
      return u;
    });

    setAllUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    const updatedCurrentUser = {
      ...currentUser,
      friends: [...(currentUser.friends || []), friendUser.id],
    };
    setCurrentUser(updatedCurrentUser);
    localStorage.setItem('loggedInUser', JSON.stringify(updatedCurrentUser));
    setFriends([...friends, friendUser]);
    setAddFriendEmail('');
    setShowAddFriend(false);
    setSuccess(t('addFriendSuccess'));
    setTimeout(() => setSuccess(''), 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!inputMessage.trim() || !activeChannel || !activeServer) {
      return;
    }

    const chatKey = `${activeServer.id}_${activeChannel.id}`;
    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderAvatar: currentUser.avatar,
      time: new Date().toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      timestamp: new Date().toISOString(),
      edited: false,
      replyTo: replyingToId || null,
      reactions: {},
    };

    const updatedMessages = [...(messages[chatKey] || [])];
    
    if (editingMessageId) {
      const index = updatedMessages.findIndex(m => m.id === editingMessageId);
      if (index !== -1) {
        updatedMessages[index] = {
          ...updatedMessages[index],
          text: inputMessage,
          edited: true,
          editedAt: new Date().toISOString(),
        };
      }
      setEditingMessageId(null);
      setEditingText('');
    } else {
      updatedMessages.push(newMessage);
    }

    setMessages((prev) => ({
      ...prev,
      [chatKey]: updatedMessages,
    }));

    localStorage.setItem(`messages_${chatKey}`, JSON.stringify(updatedMessages));
    setInputMessage('');
    setReplyingToId(null);
  };

  const deleteMessage = (messageId) => {
    if (!activeChannel || !activeServer) return;

    const chatKey = `${activeServer.id}_${activeChannel.id}`;
    const updatedMessages = (messages[chatKey] || []).filter(m => m.id !== messageId);

    setMessages((prev) => ({
      ...prev,
      [chatKey]: updatedMessages,
    }));

    localStorage.setItem(`messages_${chatKey}`, JSON.stringify(updatedMessages));
    setShowDeleteConfirm(null);
    setSuccess(t('messageDeleted'));
    setTimeout(() => setSuccess(''), 2000);
  };

  const startEditMessage = (message) => {
    setEditingMessageId(message.id);
    setEditingText(message.text);
    setInputMessage(message.text);
  };

  const addReaction = (messageId, emoji) => {
    const key = `${messageId}_reactions`;
    const currentReactions = messageReactions[key] || {};
    const updatedReactions = { ...currentReactions };

    if (updatedReactions[emoji]) {
      updatedReactions[emoji].count += 1;
      if (!updatedReactions[emoji].users.includes(currentUser.id)) {
        updatedReactions[emoji].users.push(currentUser.id);
      }
    } else {
      updatedReactions[emoji] = { count: 1, users: [currentUser.id] };
    }

    setMessageReactions((prev) => ({
      ...prev,
      [key]: updatedReactions,
    }));

    setShowEmojiPicker(null);
  };

  const loadChannelMessages = (server, channel) => {
    const chatKey = `${server.id}_${channel.id}`;
    const savedMessages = localStorage.getItem(`messages_${chatKey}`);

    if (savedMessages) {
      setMessages((prev) => ({
        ...prev,
        [chatKey]: JSON.parse(savedMessages),
      }));
    } else {
      setMessages((prev) => ({
        ...prev,
        [chatKey]: [],
      }));
    }

    setActiveServer(server);
    setActiveChannel(channel);
  };

  const createServer = () => {
    if (!newServerName.trim()) {
      setError('Server name required');
      return;
    }

    const newServer = {
      id: Date.now(),
      name: newServerName,
      icon: '🆕',
      owner: currentUser.id,
      channels: [
        { id: Date.now() + 1, name: 'general', type: 'text' },
        { id: Date.now() + 2, name: 'voice', type: 'voice' },
      ],
      members: [currentUser.id],
      isFavorite: false,
    };

    const updatedServers = [...servers, newServer];
    setServers(updatedServers);
    localStorage.setItem('user_servers', JSON.stringify(updatedServers));
    setNewServerName('');
    setShowServerCreate(false);
    setActiveServer(newServer);
    setActiveChannel(newServer.channels[0]);
    setSuccess('Server created!');
    setTimeout(() => setSuccess(''), 2000);
  };

  const createChannel = () => {
    if (!newChannelName.trim() || !activeServer) {
      setError('Channel name required');
      return;
    }

    const newChannel = {
      id: Date.now(),
      name: newChannelName,
      type: newChannelType,
    };

    const updatedServers = servers.map((s) => {
      if (s.id === activeServer.id) {
        return { ...s, channels: [...s.channels, newChannel] };
      }
      return s;
    });

    setServers(updatedServers);
    localStorage.setItem('user_servers', JSON.stringify(updatedServers));
    setActiveServer({ ...activeServer, channels: [...activeServer.channels, newChannel] });
    setNewChannelName('');
    setNewChannelType('text');
    setShowChannelCreate(false);
    setSuccess('Channel created!');
    setTimeout(() => setSuccess(''), 2000);
  };

  const bgClass = theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100';
  const sideBgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200';
  const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const inputBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200';

  // LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-4`}>
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl p-8 border border-purple-500/20">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                Discord
              </div>
              <p className="text-gray-300">Chat, Talk, Collaborate</p>
            </div>

            <div className="flex gap-2 mb-6 justify-center">
              {['vi', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    language === lang
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg text-sm">
                {success}
              </div>
            )}

            {showLoginForm ? (
              <>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      {t('password')}
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-200"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg"
                  >
                    {t('login')}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">{t('registerNow')}</p>
                  <button
                    onClick={() => setShowLoginForm(false)}
                    className="text-purple-400 hover:text-purple-300 font-bold mt-2"
                  >
                    {t('register')}
                  </button>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300">
                  <p className="font-bold mb-1">🎮 {t('demoAccount')}</p>
                </div>
              </>
            ) : (
              <>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      {t('fullName')}
                    </label>
                    <input
                      type="text"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      {t('password')}
                    </label>
                    <input
                      type={showRegisterPassword ? 'text' : 'password'}
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-200 mb-2">
                      {t('confirmPassword')}
                    </label>
                    <input
                      type={showRegisterPassword ? 'text' : 'password'}
                      value={registerPasswordConfirm}
                      onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
                      placeholder="Confirm password"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg"
                  >
                    {t('register')}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">{t('loginNow')}</p>
                  <button
                    onClick={() => setShowLoginForm(true)}
                    className="text-purple-400 hover:text-purple-300 font-bold mt-2"
                  >
                    {t('login')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // MAIN CHAT SCREEN
  return (
    <div className={`flex h-screen ${bgClass} ${textClass} overflow-hidden`}>
      {/* LEFT SIDEBAR */}
      <div className={`w-20 ${sideBgClass} border-r border-gray-800 flex flex-col items-center py-4 gap-3 overflow-y-auto`}>
        <button 
          onClick={() => {
            setActiveServer(null);
            setActiveChannel(null);
          }}
          className="w-12 h-12 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center hover:rounded-2xl transition-all shadow-lg text-xl"
        >
          🏠
        </button>

        <div className="w-8 h-0.5 bg-gray-700"></div>

        {servers && servers.map((server) => (
          <button
            key={server.id}
            onClick={() => {
              setActiveServer(server);
              if (server.channels && server.channels.length > 0) {
                setActiveChannel(server.channels[0]);
                loadChannelMessages(server, server.channels[0]);
              }
            }}
            title={server.name}
            className={`w-12 h-12 rounded-3xl flex items-center justify-center text-xl font-bold transition-all ${
              activeServer?.id === server.id
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg'
                : `${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'} hover:rounded-2xl`
            }`}
          >
            {server.icon}
          </button>
        ))}

        <button
          onClick={() => setShowServerCreate(true)}
          className={`w-12 h-12 rounded-3xl flex items-center justify-center transition-all text-xl font-bold ${
            theme === 'dark' ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-300 hover:bg-purple-400'
          }`}
          title="Create Server"
        >
          ➕
        </button>
      </div>

      {/* SERVERS & CHANNELS SIDEBAR */}
      {activeServer ? (
        <div className={`w-60 ${sideBgClass} border-r border-gray-800 flex flex-col overflow-hidden`}>
          <div className={`h-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} border-b border-gray-700 px-4 flex items-center justify-between`}>
            <h2 className="font-bold text-lg flex items-center gap-2">
              <span>{activeServer.icon}</span>
              <span className="truncate">{activeServer.name}</span>
            </h2>
            <button className={`p-2 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-400'} rounded-lg transition`}>
              <ChevronDown size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-gray-400 uppercase">{t('channels')}</p>
                <button
                  onClick={() => setShowChannelCreate(true)}
                  className={`p-1 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-400'} rounded transition`}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="space-y-1">
                {activeServer.channels && activeServer.channels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => {
                      setActiveChannel(channel);
                      loadChannelMessages(activeServer, channel);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                      activeChannel?.id === channel.id
                        ? `${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-400 text-gray-900'}`
                        : `${theme === 'dark' ? 'text-gray-400 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-gray-300'}`
                    }`}
                  >
                    {channel.type === 'text' ? <Hash size={18} /> : <Volume2 size={18} />}
                    <span className="text-sm font-medium">{channel.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} border-t border-gray-700 p-4`}>
            <p className="text-xs font-bold text-gray-400 uppercase mb-3">{t('members')}</p>
            <div className="space-y-2">
              {activeServer.members && activeServer.members.map((memberId) => {
                const member = allUsers.find((u) => u.id === memberId);
                return member ? (
                  <div key={memberId} className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs">
                      {member.avatar}
                    </div>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} >
                      {member.name}
                    </span>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      ) : null}

      {/* MAIN CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {activeChannel && activeServer ? (
          <>
            {/* Chat Header */}
            <div className={`h-16 ${sideBgClass} border-b border-gray-800 px-6 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                {activeChannel.type === 'text' ? (
                  <Hash className="text-gray-400" size={24} />
                ) : (
                  <Volume2 className="text-gray-400" size={24} />
                )}
                <div>
                  <p className="font-bold">{activeChannel.name}</p>
                  <p className="text-xs text-gray-400">
                    {activeChannel.type === 'text'
                      ? `${activeServer.members ? activeServer.members.length : 0} members`
                      : t('voiceChannel')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`p-2 ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-300'} rounded-lg transition`}
                  title={theme === 'dark' ? t('lightMode') : t('darkMode')}
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
                <button className={`p-2 ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-300'} rounded-lg transition`}>
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className={`flex-1 overflow-y-auto p-6 space-y-4 ${bgClass}`}>
              {(() => {
                const chatKey = `${activeServer.id}_${activeChannel.id}`;
                const chatMessages = messages[chatKey] || [];
                if (chatMessages.length === 0) {
                  return (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-500">No messages yet</p>
                    </div>
                  );
                }
                return chatMessages.map((msg) => {
                  const reactKey = `${msg.id}_reactions`;
                  const reactions = messageReactions[reactKey] || {};
                  const replyMessage = chatMessages.find(m => m.id === msg.replyTo);

                  return (
                    <div
                      key={msg.id}
                      className={`group ${theme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-gray-200/50'} p-2 rounded-lg transition`}
                    >
                      {replyMessage && (
                        <div className={`text-xs mb-2 pl-3 border-l-2 ${theme === 'dark' ? 'border-gray-600 text-gray-400' : 'border-gray-400 text-gray-600'}`}>
                          {t('replyTo')} <span className="font-bold">{replyMessage.senderName}</span>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm flex-shrink-0">
                          {msg.senderAvatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold">{msg.senderName}</p>
                            <p className="text-xs text-gray-500">{msg.time}</p>
                            {msg.edited && <span className="text-xs text-gray-500 italic">({t('edited')})</span>}
                          </div>
                          <p className={`break-words ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                            {msg.text}
                          </p>

                          {Object.keys(reactions).length > 0 && (
                            <div className="flex gap-2 mt-2 flex-wrap">
                              {Object.entries(reactions).map(([emoji, data]) => (
                                <button
                                  key={emoji}
                                  onClick={() => addReaction(msg.id, emoji)}
                                  className={`px-2 py-1 rounded text-sm ${
                                    theme === 'dark'
                                      ? 'bg-gray-700 hover:bg-gray-600'
                                      : 'bg-gray-300 hover:bg-gray-400'
                                  }`}
                                >
                                  {emoji} {data.count}
                                </button>
                              ))}
                            </div>
                          )}

                          <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition">
                            <button
                              onClick={() => setShowEmojiPicker(msg.id)}
                              className={`p-1 rounded text-gray-400 hover:text-gray-200 transition`}
                            >
                              <Smile size={16} />
                            </button>
                            <button
                              onClick={() => setReplyingToId(msg.id)}
                              className={`p-1 rounded text-gray-400 hover:text-gray-200 transition`}
                            >
                              <Reply size={16} />
                            </button>
                            {msg.senderId === currentUser.id && (
                              <>
                                <button
                                  onClick={() => startEditMessage(msg)}
                                  className={`p-1 rounded text-gray-400 hover:text-gray-200 transition`}
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() => setShowDeleteConfirm(msg.id)}
                                  className={`p-1 rounded text-gray-400 hover:text-red-500 transition`}
                                >
                                  <Trash2 size={16} />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {showEmojiPicker === msg.id && (
                        <div className={`absolute mt-2 p-2 rounded-lg flex gap-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} shadow-lg z-10`}>
                          {emojis.map(emoji => (
                            <button
                              key={emoji}
                              onClick={() => addReaction(msg.id, emoji)}
                              className="text-xl hover:scale-125 transition"
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      )}

                      {showDeleteConfirm === msg.id && (
                        <div className={`mt-2 p-2 ${theme === 'dark' ? 'bg-red-900/30 border border-red-700' : 'bg-red-100 border border-red-400'} rounded`}>
                          <p className="text-sm mb-2">Delete this message?</p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => deleteMessage(msg.id)}
                              className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                            >
                              Delete
                            </button>
                            <button
                              onClick={() => setShowDeleteConfirm(null)}
                              className={`px-3 py-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded text-sm`}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                });
              })()}
              <div ref={messagesEndRef} />
            </div>

            {/* Reply preview */}
            {replyingToId && (
              <div className={`px-6 py-2 border-t ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-200 border-gray-400'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {t('replyTo')}{' '}
                    {messages[`${activeServer.id}_${activeChannel.id}`]
                      ?.find(m => m.id === replyingToId)
                      ?.senderName || ''}
                  </span>
                  <button
                    onClick={() => setReplyingToId(null)}
                    className="text-gray-400 hover:text-gray-200"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className={`${sideBgClass} border-t border-gray-800 p-6`}>
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <button type="button" className={`p-2 rounded-lg transition text-gray-400 hover:text-white`}>
                  <Plus size={20} />
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={editingMessageId ? 'Edit message...' : t('messageHere')}
                  className={`flex-1 ${inputBgClass} rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/50 placeholder-gray-500 ${textClass}`}
                />
                <button
                  type="button"
                  className={`p-2 rounded-lg transition text-gray-400 hover:text-white`}
                >
                  <Smile size={20} />
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
                >
                  {editingMessageId ? 'Save' : <Send size={20} />}
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl mb-4">💬</p>
              <p className="text-2xl font-bold mb-2">{t('selectChat')}</p>
              <p className="text-gray-500">Select a server and channel to start chatting</p>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT SIDEBAR */}
      <div className={`w-64 ${sideBgClass} border-l border-gray-800 flex flex-col`}>
        <div className={`bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-gray-800 p-4`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl">
              {currentUser?.avatar}
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">{currentUser?.name}</p>
              <p className="text-xs text-gray-400">{currentUser?.badge}</p>
            </div>
            <button
              onClick={() => setShowSettings(true)}
              className={`p-2 rounded-lg transition`}
            >
              <Settings size={16} />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setUserStatus('online')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
                userStatus === 'online'
                  ? 'bg-green-500 text-white'
                  : `${theme === 'dark' ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-400 text-gray-600'}`
              }`}
            >
              ● {t('online')}
            </button>
            <button
              onClick={() => setUserStatus('away')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
                userStatus === 'away'
                  ? 'bg-yellow-500 text-white'
                  : `${theme === 'dark' ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-400 text-gray-600'}`
              }`}
            >
              ⊘ {t('away')}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-xs font-bold text-gray-400 uppercase mb-3">{t('friends')}</p>
          {friends.length === 0 ? (
            <p className="text-sm text-gray-500">{t('noFriends')}</p>
          ) : (
            <div className="space-y-2">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className={`flex items-center gap-2 p-2 ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-300'} rounded-lg transition cursor-pointer`}
                >
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs">
                      {friend.avatar}
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-gray-900 ${
                        friend.status === 'online' ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    ></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{friend.name}</p>
                    <p className="text-xs text-gray-500">
                      {friend.status === 'online' ? t('online') : t('offline')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`border-t border-gray-800 p-4`}>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-600/20 hover:bg-red-600/30 text-red-300 font-bold py-2 rounded-lg transition"
          >
            <LogOut size={16} />
            {t('logout')}
          </button>
        </div>
      </div>

      {/* MODALS */}
      {showServerCreate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className={`${sideBgClass} rounded-xl p-6 w-96 border border-gray-700`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{t('createServer')}</h2>
              <button onClick={() => setShowServerCreate(false)} className="p-1 hover:bg-gray-800 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">{t('serverName')}</label>
                <input
                  type="text"
                  value={newServerName}
                  onChange={(e) => setNewServerName(e.target.value)}
                  placeholder="My Awesome Server"
                  className={`w-full ${inputBgClass} rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500/50 ${textClass}`}
                />
              </div>

              <button
                onClick={createServer}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 rounded-lg transition-all"
              >
                {t('createServer')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showChannelCreate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className={`${sideBgClass} rounded-xl p-6 w-96 border border-gray-700`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{t('newChannel')}</h2>
              <button onClick={() => setShowChannelCreate(false)} className="p-1 hover:bg-gray-800 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">{t('channelName')}</label>
                <input
                  type="text"
                  value={newChannelName}
                  onChange={(e) => setNewChannelName(e.target.value)}
                  placeholder="general"
                  className={`w-full ${inputBgClass} rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500/50 ${textClass}`}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Type</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setNewChannelType('text')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${
                      newChannelType === 'text'
                        ? 'bg-purple-600 text-white'
                        : `${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} hover:bg-gray-700`
                    }`}
                  >
                    {t('text')}
                  </button>
                  <button
                    onClick={() => setNewChannelType('voice')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${
                      newChannelType === 'voice'
                        ? 'bg-purple-600 text-white'
                        : `${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} hover:bg-gray-700`
                    }`}
                  >
                    {t('voice')}
                  </button>
                </div>
              </div>

              <button
                onClick={createChannel}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 rounded-lg transition-all"
              >
                {t('newChannel')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className={`${sideBgClass} rounded-xl p-6 w-96 border border-gray-700 max-h-96 overflow-y-auto`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{t('settings')}</h2>
              <button onClick={() => setShowSettings(false)} className="p-1 hover:bg-gray-800 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3">{t('language')}</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { code: 'vi', name: '🇻🇳 Việt' },
                    { code: 'en', name: '🇬🇧 English' },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`py-2 px-3 rounded-lg text-sm font-bold transition ${
                        language === lang.code
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : `${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} hover:bg-gray-700`
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">{t('addFriend')}</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={addFriendEmail}
                    onChange={(e) => setAddFriendEmail(e.target.value)}
                    placeholder={t('friendEmail')}
                    className={`flex-1 ${inputBgClass} rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500/50 text-sm ${textClass}`}
                  />
                  <button
                    onClick={handleAddFriend}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition text-sm font-bold"
                  >
                    {t('sendMessage')}
                  </button>
                </div>
              </div>

              {error && (
                <div className={`p-3 rounded-lg text-sm ${theme === 'dark' ? 'bg-red-500/20 border border-red-500/50 text-red-300' : 'bg-red-100 border border-red-400 text-red-700'}`}>
                  {error}
                </div>
              )}
            </div>

            <button
              onClick={() => setShowSettings(false)}
              className={`w-full mt-6 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'} font-bold py-2 rounded-lg transition`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

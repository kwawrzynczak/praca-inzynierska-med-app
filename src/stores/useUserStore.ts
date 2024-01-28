import create from 'zustand';

interface UserState {
  userCode: number;
  setNewUser: (code: number) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  userCode: 0,
  setNewUser: (code) => set(() => ({ userCode: code })),
}));

export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const GAME_URL = 'https://hakka-wordle.netlify.app/'

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = '加嗨去剪貼簿囉'
export const ABOUT_GAME_MESSAGE = '關於這隻遊戲'
export const NOT_ENOUGH_LETTERS_MESSAGE = '唔夠字'
export const WORD_NOT_FOUND_MESSAGE = '無這隻詞'
export const CORRECT_WORD_MESSAGE = (solution: string, honsu: string) =>
  `答案係 ${solution}(${honsu})`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = '統計'
export const GUESS_DISTRIBUTION_TEXT = '分佈'
export const NEW_WORD_TEXT = '下隻新詞'
export const SHARE_TEXT = '分享'
export const TOTAL_TRIES_TEXT = '一共試過'
export const SUCCESS_RATE_TEXT = '成功率'
export const CURRENT_STREAK_TEXT = '連贏'
export const BEST_STREAK_TEXT = '最多連贏'

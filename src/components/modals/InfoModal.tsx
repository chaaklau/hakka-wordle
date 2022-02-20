import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        試下在六次裡背，估到係乜介詞語。唔使打聲調，打字母就做得。每次之後，每隻字母嘅顏色曉變嗨，表示摟答案相差幾遠。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="H" status="correct" />
        <Cell value="A" />
        <Cell value="K" />
        <Cell value="G" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        你估嘅詞語係「客家」（HAKGA），字母 H 在正確嘅位置。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="N" />
        <Cell value="G" />
        <Cell value="A" status="present" />
        <Cell value="N" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        你估嘅詞語係「硬」（NGANG），詞語裡背有字母 A ，但係位置唔正確。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" />
        <Cell value="N" status="absent" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        你估嘅詞語係「阿公」（AGUNG），詞語裡背無字母 N。
      </p>
    </BaseModal>
  )
}

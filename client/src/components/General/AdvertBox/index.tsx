import classNames from 'classnames'

interface AdvertBoxProps {
  content?: string
  isSignInBtn?: boolean
  btnContent?: string
}

function AdvertBox(props: AdvertBoxProps) {
  return (
    <div
      className={classNames(
        'my-4 px-2 py-4 text-center w-[184px] rounded-lg absolute left-1/2 -translate-x-2/4',
        { 'bg-[#986d5c]': props.isSignInBtn },
      )}
    >
      <p className="text-xs text-theme-primary font-semibold mb-[10px]">{props.content}</p>
      <button className="text-xs text-theme-primary bg-theme-alpha font-semibold border-theme-primary border px-9 py-[6px] rounded-full hover:brightness-90">
        {props.btnContent}
      </button>
    </div>
  )
}

export default AdvertBox

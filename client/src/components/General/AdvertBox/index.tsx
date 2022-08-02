function AdvertBox() {
  return (
    <div className="px-2 py-4 text-center w-[184px] bg-[#986d5c] rounded-lg absolute left-1/2 -translate-x-2/4">
      <p className="text-xs text-theme-primary font-semibold mb-[10px]">
        Đăng nhập để khám phá playlist riêng dành cho bạn
      </p>
      <button className="text-xs text-theme-primary font-semibold border-theme-primary border px-9 py-[6px] rounded-full">
        Đăng Nhập
      </button>
    </div>
  )
}

export default AdvertBox

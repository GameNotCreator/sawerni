const SimpleBanner = () => {
    return (
      <>
        <div
          // replace `absolute` with `fixed` if you want the banner to be fixed on the page Also Animation will not work if you use `absolute`
          className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out`}
        >
          <div className="flex w-full items-center justify-center gap-x-6 bg-black px-6 py-3 sm:px-3.5">
            <div className="flex items-center text-sm font-medium leading-6 text-white">
              <p>Limited Edition</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default SimpleBanner
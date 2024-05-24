import clsx from "clsx"

export function Button({
  type,
  className = "",
  variant = "primary",
  children,
  icon,
  ...props
}) {
  return (
    <button
      className={clsx(
        "px-8 md:px-12 py-3 md:py-5 text-sm lg:text-base font-medium rounded border border-solid",
        {
          "bg-white text-black border-lila-slate-200": variant === "primary",
          "flex items-center gap-2.5": icon,
        },
        className
      )}
      type={type}
      {...props}
    >
      {children}
      {icon && <span className="w-6 h-6">{icon}</span>}
    </button>
  )
}

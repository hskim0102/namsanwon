type Props = { title: string; breadcrumb: string[] }

export default function PageHeader({ title, breadcrumb }: Props) {
  return (
    <div className="bg-[#E8863A] text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-white/80 text-sm">{breadcrumb.join(' > ')}</p>
      </div>
    </div>
  )
}

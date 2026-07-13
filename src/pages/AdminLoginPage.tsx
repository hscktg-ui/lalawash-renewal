import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { isAdminLoggedIn, loginAdmin } from '../lib/admin'
import { BRAND } from '../data'

export default function AdminLoginPage() {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (isAdminLoggedIn()) return <Navigate to="/admin/notices" replace />

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (loginAdmin(id.trim(), password)) {
      navigate('/admin/notices')
      return
    }
    setError('아이디 또는 비밀번호가 올바르지 않습니다.')
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-slate-100 px-5">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        <p className="text-sm font-semibold text-lala-600">{BRAND.name} 관리자</p>
        <h1 className="mt-2 text-2xl font-extrabold">로그인</h1>
        <p className="mt-2 text-sm text-muted">공지·공문 게시판을 관리합니다. 일반 메뉴에는 노출되지 않습니다.</p>

        <label className="mt-6 block text-sm font-semibold">
          아이디
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            autoComplete="username"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal"
            required
          />
        </label>
        <label className="mt-4 block text-sm font-semibold">
          비밀번호
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal"
            required
          />
        </label>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-lala-600 py-3.5 text-sm font-bold text-white hover:bg-lala-700"
        >
          로그인
        </button>
      </form>
    </div>
  )
}

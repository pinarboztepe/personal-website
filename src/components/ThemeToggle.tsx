'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
            {theme === 'dark' ? (
                <SunIcon className='w-5 h-5' />
            ) : (
                <MoonIcon className='w-5 h-5' />
            )}
        </button>
    )
}

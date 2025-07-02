import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export function ToggleTheme() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldBeDark = storedTheme === 'dark' || (!storedTheme && prefersDark)

        document.documentElement.classList.toggle('dark', shouldBeDark)
        setIsDark(shouldBeDark)
    }, [])

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark'
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
        localStorage.setItem('theme', newTheme)
        setIsDark(newTheme === 'dark')
    }

    return (
        <Button variant="outline" className={"!w-10 !h-10 !border-2"} size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-10 w-10" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

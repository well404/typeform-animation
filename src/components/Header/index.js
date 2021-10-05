//Styles
import { useTransform, useViewportScroll } from 'framer-motion'
import { HeaderContainer } from './style'
function Header() {

    const { scrollYProgress } = useViewportScroll()

    const headerY = useTransform(
        scrollYProgress,
        [0.188, 0.198],
        ['0%', '-100%']
    )

    return (
        <HeaderContainer style={{
            y: headerY
        }} />
    )
}

export default Header

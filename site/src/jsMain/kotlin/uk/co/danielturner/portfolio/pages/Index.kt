package uk.co.danielturner.portfolio.pages

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.BackgroundClip
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.functions.LinearGradient
import com.varabyte.kobweb.compose.css.functions.linearGradient
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.data.add
import com.varabyte.kobweb.core.init.InitRoute
import com.varabyte.kobweb.core.init.InitRouteContext
import com.varabyte.kobweb.core.layout.Layout
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.selectors.hover
import com.varabyte.kobweb.silk.style.toModifier
import org.jetbrains.compose.web.css.px
import uk.co.danielturner.portfolio.components.layouts.PageLayoutData

val HeroContainerStyle = CssStyle {
    base { Modifier.fillMaxSize() }
}

val TextStyle = CssStyle {
    base {
        Modifier
            .fontSize(48.px)
            .fontWeight(FontWeight.Bold)
            .color(Colors.Transparent)
            .backgroundImage(
                linearGradient(Colors.MediumSeaGreen, Colors.RoyalBlue, LinearGradient.Direction.ToRight)
            )
            .background {
                clip(BackgroundClip.Text)
            }
    }

    hover {
        Modifier
            .backgroundImage(
                linearGradient(
                    Colors.HotPink,
                    Colors.GoldenRod,
                    LinearGradient.Direction.ToRight
                )
            )
    }
}

@InitRoute
fun initHomePage(ctx: InitRouteContext) {
    ctx.data.add(PageLayoutData("Home"))
}

@Page
@Layout(".components.layouts.PageLayout")
@Composable
fun HomePage() {
    Box(
        modifier = HeroContainerStyle.toModifier(),
        contentAlignment = Alignment.Center
    ) {
        SpanText(
            text = "Daniel Turner",
            modifier = TextStyle.toModifier()
//                .color(
//                    when (ColorMode.current) {
//                        ColorMode.LIGHT -> Colors.Black
//                        ColorMode.DARK -> Colors.White
//                    }
//                )
        )
    }
}

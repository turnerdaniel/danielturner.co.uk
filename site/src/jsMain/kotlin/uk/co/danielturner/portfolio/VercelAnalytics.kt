@file:JsModule("@vercel/analytics")
@file:JsNonModule

package uk.co.danielturner.portfolio

external fun inject(props: InjectProps = definedExternally)

typealias BeforeSendEvent = Any /* PageViewEvent | CustomEvent */
typealias BeforeSend = (event: BeforeSendEvent) -> BeforeSendEvent?

external interface InjectProps : AnalyticsProps {
    var framework: String?
    var disableAutoTrack: Boolean?
    var basePath: String?
}

external interface AnalyticsProps {
    var beforeSend: BeforeSend?
    var debug: Boolean?
    var mode: Mode?
    var scriptSrc: String?
    var endpoint: String?
    var dsn: String?
}

sealed external interface Mode {
    companion object {
        val auto: Mode
        val development: Mode
        val production: Mode
    }
}

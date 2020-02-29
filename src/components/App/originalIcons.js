import * as Hero from "components/heroicons"

const originalIcons = [
	{ name: "adjustments", outline: Hero.Adjustments_md, solid: Hero.Adjustments_sm },
	{ name: "annotation", outline: Hero.Annotation_md, solid: Hero.Annotation_sm },
	{ name: "archive", outline: Hero.Archive_md, solid: Hero.Archive_sm },
	{ name: "arrow-circle-down", outline: Hero.ArrowCircleDown_md, solid: Hero.ArrowCircleDown_sm },
	{ name: "arrow-circle-left", outline: Hero.ArrowCircleLeft_md, solid: Hero.ArrowCircleLeft_sm },
	{ name: "arrow-circle-right", outline: Hero.ArrowCircleRight_md, solid: Hero.ArrowCircleRight_sm },
	{ name: "arrow-circle-up", outline: Hero.ArrowCircleUp_md, solid: Hero.ArrowCircleUp_sm },
	{ name: "arrow-down", outline: Hero.ArrowDown_md, solid: Hero.ArrowDown_sm },
	{ name: "arrow-left", outline: Hero.ArrowLeft_md, solid: Hero.ArrowLeft_sm },
	{ name: "arrow-narrow-down", outline: Hero.ArrowNarrowDown_md, solid: Hero.ArrowNarrowDown_sm },
	{ name: "arrow-narrow-left", outline: Hero.ArrowNarrowLeft_md, solid: Hero.ArrowNarrowLeft_sm },
	{ name: "arrow-narrow-right", outline: Hero.ArrowNarrowRight_md, solid: Hero.ArrowNarrowRight_sm },
	{ name: "arrow-narrow-up", outline: Hero.ArrowNarrowUp_md, solid: Hero.ArrowNarrowUp_sm },
	{ name: "arrow-right", outline: Hero.ArrowRight_md, solid: Hero.ArrowRight_sm },
	{ name: "arrow-up", outline: Hero.ArrowUp_md, solid: Hero.ArrowUp_sm },
	{ name: "at-symbol", outline: Hero.AtSymbol_md, solid: Hero.AtSymbol_sm },
	{ name: "bell", outline: Hero.Bell_md, solid: Hero.Bell_sm },
	{ name: "book-open", outline: Hero.BookOpen_md, solid: Hero.BookOpen_sm },
	{ name: "bookmark", outline: Hero.Bookmark_md, solid: Hero.Bookmark_sm },
	{ name: "briefcase", outline: Hero.Briefcase_md, solid: Hero.Briefcase_sm },
	{ name: "calendar", outline: Hero.Calendar_md, solid: Hero.Calendar_sm },
	{ name: "camera", outline: Hero.Camera_md, solid: Hero.Camera_sm },
	{ name: "cash", outline: Hero.Cash_md, solid: Hero.Cash_sm },
	{ name: "chart-pie", outline: Hero.ChartPie_md, solid: Hero.ChartPie_sm },
	{ name: "chat", outline: Hero.Chat_md, solid: Hero.Chat_sm },
	{ name: "check-circle", outline: Hero.CheckCircle_md, solid: Hero.CheckCircle_sm },
	{ name: "check", outline: Hero.Check_md, solid: Hero.Check_sm },
	{ name: "cheveron-down", outline: Hero.CheveronDown_md, solid: Hero.CheveronDown_sm },
	{ name: "cheveron-left", outline: Hero.CheveronLeft_md, solid: Hero.CheveronLeft_sm },
	{ name: "cheveron-right", outline: Hero.CheveronRight_md, solid: Hero.CheveronRight_sm },
	{ name: "cheveron-up", outline: Hero.CheveronUp_md, solid: Hero.CheveronUp_sm },
	{ name: "clipboard-check", outline: Hero.ClipboardCheck_md, solid: Hero.ClipboardCheck_sm },
	{ name: "clipboard-copy", outline: Hero.ClipboardCopy_md, solid: Hero.ClipboardCopy_sm },
	{ name: "clipboard-list", outline: Hero.ClipboardList_md, solid: Hero.ClipboardList_sm },
	{ name: "clipboard", outline: Hero.Clipboard_md, solid: Hero.Clipboard_sm },
	{ name: "clock", outline: Hero.Clock_md, solid: Hero.Clock_sm },
	{ name: "cloud-download", outline: Hero.CloudDownload_md, solid: Hero.CloudDownload_sm },
	{ name: "cloud-upload", outline: Hero.CloudUpload_md, solid: Hero.CloudUpload_sm },
	{ name: "code", outline: Hero.Code_md, solid: Hero.Code_sm },
	{ name: "cog", outline: Hero.Cog_md, solid: Hero.Cog_sm },
	{ name: "collection", outline: Hero.Collection_md, solid: Hero.Collection_sm },
	{ name: "color-swatch", outline: Hero.ColorSwatch_md, solid: Hero.ColorSwatch_sm },
	{ name: "credit-card", outline: Hero.CreditCard_md, solid: Hero.CreditCard_sm },
	{ name: "currency-dollar", outline: Hero.CurrencyDollar_md, solid: Hero.CurrencyDollar_sm },
	{ name: "currency-euro", outline: Hero.CurrencyEuro_md, solid: Hero.CurrencyEuro_sm },
	{ name: "currency-pound", outline: Hero.CurrencyPound_md, solid: Hero.CurrencyPound_sm },
	{ name: "currency-rupee", outline: Hero.CurrencyRupee_md, solid: Hero.CurrencyRupee_sm },
	{ name: "currency-yen", outline: Hero.CurrencyYen_md, solid: Hero.CurrencyYen_sm },
	{ name: "document-add", outline: Hero.DocumentAdd_md, solid: Hero.DocumentAdd_sm },
	{ name: "document-download", outline: Hero.DocumentDownload_md, solid: Hero.DocumentDownload_sm },
	{ name: "document-duplicate", outline: Hero.DocumentDuplicate_md, solid: Hero.DocumentDuplicate_sm },
	{ name: "document-remove", outline: Hero.DocumentRemove_md, solid: Hero.DocumentRemove_sm },
	{ name: "document", outline: Hero.Document_md, solid: Hero.Document_sm },
	{ name: "dots-circle-horizontal", outline: Hero.DotsCircleHorizontal_md, solid: Hero.DotsCircleHorizontal_sm },
	{ name: "dots-horizontal", outline: Hero.DotsHorizontal_md, solid: Hero.DotsHorizontal_sm },
	{ name: "dots-vertical", outline: Hero.DotsVertical_md, solid: Hero.DotsVertical_sm },
	{ name: "download", outline: Hero.Download_md, solid: Hero.Download_sm },
	{ name: "duplicate", outline: Hero.Duplicate_md, solid: Hero.Duplicate_sm },
	{ name: "emoji-happy", outline: Hero.EmojiHappy_md, solid: Hero.EmojiHappy_sm },
	{ name: "emoji-sad", outline: Hero.EmojiSad_md, solid: Hero.EmojiSad_sm },
	{ name: "exclamation-circle", outline: Hero.ExclamationCircle_md, solid: Hero.ExclamationCircle_sm },
	{ name: "exclamation", outline: Hero.Exclamation_md, solid: Hero.Exclamation_sm },
	{ name: "external-link", outline: Hero.ExternalLink_md, solid: Hero.ExternalLink_sm },
	{ name: "eye", outline: Hero.Eye_md, solid: Hero.Eye_sm },
	{ name: "filter", outline: Hero.Filter_md, solid: Hero.Filter_sm },
	{ name: "flag", outline: Hero.Flag_md, solid: Hero.Flag_sm },
	{ name: "folder", outline: Hero.Folder_md, solid: Hero.Folder_sm },
	{ name: "globe-alt", outline: Hero.GlobeAlt_md, solid: Hero.GlobeAlt_sm },
	{ name: "globe", outline: Hero.Globe_md, solid: Hero.Globe_sm },
	{ name: "hashtag", outline: Hero.Hashtag_md, solid: Hero.Hashtag_sm },
	{ name: "heart", outline: Hero.Heart_md, solid: Hero.Heart_sm },
	{ name: "home", outline: Hero.Home_md, solid: Hero.Home_sm },
	{ name: "inbox-in", outline: Hero.InboxIn_md, solid: Hero.InboxIn_sm },
	{ name: "inbox", outline: Hero.Inbox_md, solid: Hero.Inbox_sm },
	{ name: "information-circle", outline: Hero.InformationCircle_md, solid: Hero.InformationCircle_sm },
	{ name: "light-bulb", outline: Hero.LightBulb_md, solid: Hero.LightBulb_sm },
	{ name: "lightning-bolt", outline: Hero.LightningBolt_md, solid: Hero.LightningBolt_sm },
	{ name: "link", outline: Hero.Link_md, solid: Hero.Link_sm },
	{ name: "location-marker", outline: Hero.LocationMarker_md, solid: Hero.LocationMarker_sm },
	{ name: "lock-closed", outline: Hero.LockClosed_md, solid: Hero.LockClosed_sm },
	{ name: "lock-open", outline: Hero.LockOpen_md, solid: Hero.LockOpen_sm },
	{ name: "mail-open", outline: Hero.MailOpen_md, solid: Hero.MailOpen_sm },
	{ name: "mail", outline: Hero.Mail_md, solid: Hero.Mail_sm },
	{ name: "menu-alt-1", outline: Hero.MenuAlt1_md, solid: Hero.MenuAlt1_sm },
	{ name: "menu-alt-2", outline: Hero.MenuAlt2_md, solid: Hero.MenuAlt2_sm },
	{ name: "menu-alt-3", outline: Hero.MenuAlt3_md, solid: Hero.MenuAlt3_sm },
	{ name: "menu-alt-4", outline: Hero.MenuAlt4_md, solid: Hero.MenuAlt4_sm },
	{ name: "menu", outline: Hero.Menu_md, solid: Hero.Menu_sm },
	{ name: "minus-circle", outline: Hero.MinusCircle_md, solid: Hero.MinusCircle_sm },
	{ name: "moon", outline: Hero.Moon_md, solid: Hero.Moon_sm },
	{ name: "office-building", outline: Hero.OfficeBuilding_md, solid: Hero.OfficeBuilding_sm },
	{ name: "paper-clip", outline: Hero.PaperClip_md, solid: Hero.PaperClip_sm },
	{ name: "pencil-alt", outline: Hero.PencilAlt_md, solid: Hero.PencilAlt_sm },
	{ name: "pencil", outline: Hero.Pencil_md, solid: Hero.Pencil_sm },
	{ name: "phone-incoming", outline: Hero.PhoneIncoming_md, solid: Hero.PhoneIncoming_sm },
	{ name: "phone-outgoing", outline: Hero.PhoneOutgoing_md, solid: Hero.PhoneOutgoing_sm },
	{ name: "phone", outline: Hero.Phone_md, solid: Hero.Phone_sm },
	{ name: "photograph", outline: Hero.Photograph_md, solid: Hero.Photograph_sm },
	{ name: "plus-circle", outline: Hero.PlusCircle_md, solid: Hero.PlusCircle_sm },
	{ name: "plus", outline: Hero.Plus_md, solid: Hero.Plus_sm },
	{ name: "printer", outline: Hero.Printer_md, solid: Hero.Printer_sm },
	{ name: "qrcode", outline: Hero.Qrcode_md, solid: Hero.Qrcode_sm },
	{ name: "question-mark-circle", outline: Hero.QuestionMarkCircle_md, solid: Hero.QuestionMarkCircle_sm },
	{ name: "receipt-refund", outline: Hero.ReceiptRefund_md, solid: Hero.ReceiptRefund_sm },
	{ name: "refresh", outline: Hero.Refresh_md, solid: Hero.Refresh_sm },
	{ name: "reply", outline: Hero.Reply_md, solid: Hero.Reply_sm },
	{ name: "scale", outline: Hero.Scale_md, solid: Hero.Scale_sm },
	{ name: "search", outline: Hero.Search_md, solid: Hero.Search_sm },
	{ name: "selector", outline: Hero.Selector_md, solid: Hero.Selector_sm },
	{ name: "share", outline: Hero.Share_md, solid: Hero.Share_sm },
	{ name: "shield-check", outline: Hero.ShieldCheck_md, solid: Hero.ShieldCheck_sm },
	{ name: "shield-exclamation", outline: Hero.ShieldExclamation_md, solid: Hero.ShieldExclamation_sm },
	{ name: "sort-ascending", outline: Hero.SortAscending_md, solid: Hero.SortAscending_sm },
	{ name: "sort-descending", outline: Hero.SortDescending_md, solid: Hero.SortDescending_sm },
	{ name: "sparkles", outline: Hero.Sparkles_md, solid: Hero.Sparkles_sm },
	{ name: "sun", outline: Hero.Sun_md, solid: Hero.Sun_sm },
	{ name: "switch-horizontal", outline: Hero.SwitchHorizontal_md, solid: Hero.SwitchHorizontal_sm },
	{ name: "switch-vertical", outline: Hero.SwitchVertical_md, solid: Hero.SwitchVertical_sm },
	{ name: "tag", outline: Hero.Tag_md, solid: Hero.Tag_sm },
	{ name: "template", outline: Hero.Template_md, solid: Hero.Template_sm },
	{ name: "ticket", outline: Hero.Ticket_md, solid: Hero.Ticket_sm },
	{ name: "translate", outline: Hero.Translate_md, solid: Hero.Translate_sm },
	{ name: "trash", outline: Hero.Trash_md, solid: Hero.Trash_sm },
	{ name: "trending-down", outline: Hero.TrendingDown_md, solid: Hero.TrendingDown_sm },
	{ name: "trending-up", outline: Hero.TrendingUp_md, solid: Hero.TrendingUp_sm },
	{ name: "upload", outline: Hero.Upload_md, solid: Hero.Upload_sm },
	{ name: "user-add", outline: Hero.UserAdd_md, solid: Hero.UserAdd_sm },
	{ name: "user-circle", outline: Hero.UserCircle_md, solid: Hero.UserCircle_sm },
	{ name: "user-group", outline: Hero.UserGroup_md, solid: Hero.UserGroup_sm },
	{ name: "user-remove", outline: Hero.UserRemove_md, solid: Hero.UserRemove_sm },
	{ name: "user", outline: Hero.User_md, solid: Hero.User_sm },
	{ name: "users", outline: Hero.Users_md, solid: Hero.Users_sm },
	{ name: "view-boards", outline: Hero.ViewBoards_md, solid: Hero.ViewBoards_sm },
	{ name: "view-list", outline: Hero.ViewList_md, solid: Hero.ViewList_sm },
	{ name: "volume-off", outline: Hero.VolumeOff_md, solid: Hero.VolumeOff_sm },
	{ name: "volume-up", outline: Hero.VolumeUp_md, solid: Hero.VolumeUp_sm },
	{ name: "x-circle", outline: Hero.XCircle_md, solid: Hero.XCircle_sm },
	{ name: "x", outline: Hero.X_md, solid: Hero.X_sm },
	{ name: "zoom-in", outline: Hero.ZoomIn_md, solid: Hero.ZoomIn_sm },
	{ name: "zoom-out", outline: Hero.ZoomOut_md, solid: Hero.ZoomOut_sm },
]

export default originalIcons
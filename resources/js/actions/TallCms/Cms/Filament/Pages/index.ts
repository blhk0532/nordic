import SiteSettings from './SiteSettings'
import MenuItemsManager from './MenuItemsManager'
import PluginManager from './PluginManager'
import PluginLicenses from './PluginLicenses'
import ThemeManager from './ThemeManager'

const Pages = {
    SiteSettings: Object.assign(SiteSettings, SiteSettings),
    MenuItemsManager: Object.assign(MenuItemsManager, MenuItemsManager),
    PluginManager: Object.assign(PluginManager, PluginManager),
    PluginLicenses: Object.assign(PluginLicenses, PluginLicenses),
    ThemeManager: Object.assign(ThemeManager, ThemeManager),
}

export default Pages
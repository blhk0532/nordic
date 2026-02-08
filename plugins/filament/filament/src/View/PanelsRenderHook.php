<?php

declare(strict_types=1);

namespace Filament\View;

class PanelsRenderHook
{
    public const AUTH_LOGIN_FORM_AFTER = 'panels::auth.login.form.after';

    public const AUTH_LOGIN_FORM_BEFORE = 'panels::auth.login.form.before';

    public const AUTH_PASSWORD_RESET_REQUEST_FORM_AFTER = 'panels::auth.password-reset.request.form.after';

    public const AUTH_PASSWORD_RESET_REQUEST_FORM_BEFORE = 'panels::auth.password-reset.request.form.before';

    public const AUTH_PASSWORD_RESET_RESET_FORM_AFTER = 'panels::auth.password-reset.reset.form.after';

    public const AUTH_PASSWORD_RESET_RESET_FORM_BEFORE = 'panels::auth.password-reset.reset.form.before';

    public const AUTH_REGISTER_FORM_AFTER = 'panels::auth.register.form.after';

    public const AUTH_REGISTER_FORM_BEFORE = 'panels::auth.register.form.before';

    public const BODY_END = 'panels::body.end';

    public const BODY_START = 'panels::body.start';

    public const CONTENT_AFTER = 'panels::content.after';

    public const CONTENT_BEFORE = 'panels::content.before';

    public const CONTENT_END = 'panels::content.end';

    public const CONTENT_START = 'panels::content.start';

    public const FOOTER = 'panels::footer';

    public const GLOBAL_SEARCH_AFTER = 'panels::global-search.after';

    public const GLOBAL_SEARCH_BEFORE = 'panels::global-search.before';

    public const GLOBAL_SEARCH_END = 'panels::global-search.end';

    public const GLOBAL_SEARCH_START = 'panels::global-search.start';

    public const HEAD_END = 'panels::head.end';

    public const HEAD_START = 'panels::head.start';

    public const LAYOUT_END = 'panels::layout.end';

    public const LAYOUT_START = 'panels::layout.start';

    public const PAGE_END = 'panels::page.end';

    public const PAGE_FOOTER_WIDGETS_AFTER = 'panels::page.footer-widgets.after';

    public const PAGE_FOOTER_WIDGETS_BEFORE = 'panels::page.footer-widgets.before';

    public const PAGE_FOOTER_WIDGETS_END = 'panels::page.footer-widgets.end';

    public const PAGE_FOOTER_WIDGETS_START = 'panels::page.footer-widgets.start';

    public const PAGE_HEADER_ACTIONS_AFTER = 'panels::page.header.actions.after';

    public const PAGE_HEADER_ACTIONS_BEFORE = 'panels::page.header.actions.before';

    public const PAGE_HEADER_WIDGETS_AFTER = 'panels::page.header-widgets.after';

    public const PAGE_HEADER_WIDGETS_BEFORE = 'panels::page.header-widgets.before';

    public const PAGE_HEADER_WIDGETS_END = 'panels::page.header-widgets.end';

    public const PAGE_HEADER_WIDGETS_START = 'panels::page.header-widgets.start';

    public const PAGE_START = 'panels::page.start';

    public const PAGE_SUB_NAVIGATION_MOBILE_MENU_AFTER = 'panels::page.sub-navigation.module-menu.after';

    public const PAGE_SUB_NAVIGATION_MOBILE_MENU_BEFORE = 'panels::page.sub-navigation.module-menu.before';

    public const PAGE_SUB_NAVIGATION_SIDEBAR_AFTER = 'panels::page.sub-navigation.sidebar.after';

    public const PAGE_SUB_NAVIGATION_SIDEBAR_BEFORE = 'panels::page.sub-navigation.sidebar.before';

    public const PAGE_SUB_NAVIGATION_START_AFTER = 'panels::page.sub-navigation.start.after';

    public const PAGE_SUB_NAVIGATION_START_BEFORE = 'panels::page.sub-navigation.start.before';

    public const PAGE_SUB_NAVIGATION_TOP_AFTER = 'panels::page.sub-navigation.top.after';

    public const PAGE_SUB_NAVIGATION_TOP_BEFORE = 'panels::page.sub-navigation.top.before';

    public const PAGE_SUB_NAVIGATION_END_AFTER = 'panels::page.sub-navigation.end.after';

    public const PAGE_SUB_NAVIGATION_END_BEFORE = 'panels::page.sub-navigation.end.before';

    public const RESOURCE_PAGES_LIST_RECORDS_TABLE_AFTER = 'panels::resource.pages.list-records.table.after';

    public const RESOURCE_PAGES_LIST_RECORDS_TABLE_BEFORE = 'panels::resource.pages.list-records.table.before';

    public const RESOURCE_PAGES_LIST_RECORDS_TABS_END = 'panels::resource.pages.list-records.tabs.end';

    public const RESOURCE_PAGES_LIST_RECORDS_TABS_START = 'panels::resource.pages.list-records.tabs.start';

    public const RESOURCE_PAGES_MANAGE_RELATED_RECORDS_TABLE_AFTER = 'panels::resource.pages.manage-related-records.table.after';

    public const RESOURCE_PAGES_MANAGE_RELATED_RECORDS_TABLE_BEFORE = 'panels::resource.pages.manage-related-records.table.before';

    public const RESOURCE_RELATION_MANAGER_AFTER = 'panels::resource.relation-manager.after';

    public const RESOURCE_RELATION_MANAGER_BEFORE = 'panels::resource.relation-manager.before';

    public const RESOURCE_TABS_END = 'panels::resource.tabs.end';

    public const RESOURCE_TABS_START = 'panels::resource.tabs.start';

    public const SCRIPTS_AFTER = 'panels::scripts.after';

    public const SCRIPTS_BEFORE = 'panels::scripts.before';

    public const SIDEBAR_FOOTER = 'panels::sidebar.footer';

    public const SIDEBAR_LOGO_AFTER = 'panels::sidebar.logo.after';

    public const SIDEBAR_LOGO_BEFORE = 'panels::sidebar.logo.before';

    public const SIDEBAR_START = 'panels::sidebar.start';

    public const SIDEBAR_NAV_END = 'panels::sidebar.nav.end';

    public const SIDEBAR_NAV_START = 'panels::sidebar.nav.start';

    public const SIMPLE_LAYOUT_END = 'panels::simple-layout.end';

    public const SIMPLE_LAYOUT_START = 'panels::simple-layout.start';

    public const SIMPLE_PAGE_END = 'panels::simple-page.end';

    public const SIMPLE_PAGE_START = 'panels::simple-page.start';

    public const STYLES_AFTER = 'panels::styles.after';

    public const STYLES_BEFORE = 'panels::styles.before';

    public const TENANT_MENU_AFTER = 'panels::tenant-menu.after';

    public const TENANT_MENU_BEFORE = 'panels::tenant-menu.before';

    public const TOPBAR_AFTER = 'panels::topbar.after';

    public const TOPBAR_BEFORE = 'panels::topbar.before';

    public const TOPBAR_END = 'panels::topbar.end';

    public const TOPBAR_LOGO_AFTER = 'panels::topbar.logo.after';

    public const TOPBAR_LOGO_BEFORE = 'panels::topbar.logo.before';

    public const TOPBAR_START = 'panels::topbar.start';

    public const USER_MENU_AFTER = 'panels::user-menu.after';

    public const USER_MENU_BEFORE = 'panels::user-menu.before';

    public const USER_MENU_PROFILE_AFTER = 'panels::user-menu.profile.after';

    public const USER_MENU_PROFILE_BEFORE = 'panels::user-menu.profile.before';
}

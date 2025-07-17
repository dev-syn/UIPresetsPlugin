import { UIPresetsUIHandler } from 'userInterface/UIPresetsUIHandler';

const toolbar = plugin.CreateToolbar("dev-syn Plugins");
const button = toolbar.CreateButton("UIPresets","This plugin allows you to interface with UIPresets within Studio using components & presets within Studio.", "");

const WIDGET_INFO: DockWidgetPluginGuiInfo = new DockWidgetPluginGuiInfo(Enum.InitialDockState.Float,true,false,250,800,100,250);
const DOCK_WIDGET: DockWidgetPluginGui = plugin.CreateDockWidgetPluginGui("dev-syn.plugins.UIPresets",WIDGET_INFO);
DOCK_WIDGET.Name = "dev-syn.plugins.UIPresets";

UIPresetsUIHandler.Init(DOCK_WIDGET);
button.Click.Connect(() => DOCK_WIDGET.Enabled = !DOCK_WIDGET.Enabled);
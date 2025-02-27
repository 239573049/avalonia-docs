---
description: TUTORIALS - To Do List App
---

# 添加新项目

在本教程的早期阶段，当您创建 `ToDoListView` 用户控件时，您添加了一个按钮，以便用户可以添加新项目。在本页面中，您将为按钮添加一个动作。

当用户单击按钮时，您希望应用程序显示一个新视图，允许用户输入新项目的描述。

## 创建一个新视图

如果您正在使用 Visual Studio，请按照以下步骤创建新视图：

- 在 **解决方案资源管理器** 中找到并右键单击 **Views** 文件夹。
- 点击 **添加**
- 点击 **Avalonia**，然后点击 **UserControl (Avalonia)**
- 在 **名称** 中输入 `AddItemView`
- 点击 **添加**
- 将 XAML 修改为如下内容：

```xml
<UserControl xmlns="https://github.com/avaloniaui"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
             mc:Ignorable="d" d:DesignWidth="250" d:DesignHeight="450"
             x:Class="ToDoList.Views.AddItemView">
  <DockPanel>
    <Button DockPanel.Dock="Bottom" 
            HorizontalAlignment="Stretch"
            HorizontalContentAlignment="Center">Cancel</Button>
    <Button DockPanel.Dock="Bottom" 
            HorizontalAlignment="Stretch"
            HorizontalContentAlignment="Center">OK</Button>
    <TextBox AcceptsReturn="True"
             Text="{Binding Description}"
             Watermark="Enter your to do item"/>
  </DockPanel>
</UserControl>
```

这样，您就得到了一个如下图所示的视图：

<div style={{textAlign: 'center'}}>
  <img src="/img/gitbook-import/assets/image (44).png" alt=""/>
</div>

新视图有一个文本框控件，其中有三个属性供您查看：

* `AcceptsReturn` 创建一个多行文本框。
* `Text` 将文本框中显示的文本绑定到视图模型上的 `Description` 属性（您还没有创建视图模型）。
* `Watermark` 当文本框为空时显示一个占位符。

## 创建视图模型

目前为止，您只绑定了一个描述属性。因此，相应的视图模型可以从简开始。

按照以下步骤为新视图创建视图模型：

- In the **Solution Explorer** locate and right-click the **ViewModels** folder.&#x20;
- Click **Add**, then **Class**.&#x20;
- Name the class 'AddItemViewModel'. Click **Add**.
- Add the description property as shown:
- 在 **解决方案资源管理器** 中找到并右键单击 **ViewModels** 文件夹。
- 点击 **添加**，然后点击 **类**。
- 将类命名为 `AddItemViewModel`，然后点击 **添加**。
- 添加如下所示的描述属性：

```csharp
using System;

namespace ToDoList.ViewModels
{
    public class AddItemViewModel : ViewModelBase
    {
        public string Description { get; set; } = String.Empty;
    }
}
```

在下一页中，您将学习如何更改主窗口中的视图，以在待办事项列表视图的位置显示新项目视图。

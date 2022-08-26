# theme-anatole

Halo 2.0 版本的 Anatole 主题。基于 1.x 的 <https://github.com/halo-dev/halo-theme-anatole> 移植。（WIP）

## 开发环境设置

```bash
git clone https://github.com/halo-sigs/theme-anatole ~/halo-next/themes
```

```bash
pnpm install
```

```bash
pnpm build
```

## 构建发行版本

```bash
pnpm prerelease
```

构建完成之后，可以得到 `dist/theme-anatole-{version}.zip` 文件，最终在 Halo 2.0 后台上传即可。

TIPS：

- 此主题必须经过构建才能使用，不能直接下载或者 Clone 源码使用。
- 目前设置了 GitHub Action 的 Push 构建，你可以在 <https://github.com/halo-sigs/theme-anatole/actions> 的每个构建详情中下载最新构建的 ZIP 文件。
- 也可以在 <https://github.com/halo-sigs/theme-anatole/releases> 页面下载最新的发行版。

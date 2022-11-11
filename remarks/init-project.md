# 项目初始化

使用 `pnpm` 作为包管理器
[pnpm](https://pnpm.io/installation)

## husky

[github](https://github.com/typicode/husky)
[husky 文档](https://www.git-tower.com/blog/git-hooks-husky/#post-detail)

通过 husky 安装 lint code

```bash
pnpm add lint-staged prettier

npx husky add .husky/pre-commit "lint-staged"
```

## 镜像

`pnpm config set registry https://registry.npmjs.org`

```bash
// 设置
npm config set registry https://registry.npmmirror.com/
yarn config set registry https://registry.npmmirror.com/
pnpm config set registry https://registry.npmmirror.com/

// 查看
npm config get registry
yarn config get registry
pnpm config get registry
```

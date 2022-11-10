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

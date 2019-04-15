```bash
{
  "devDependencies": {
    "@types/graphql": "^14.0.5",
    "@types/klaw-sync": "^6.0.0",
    # klaw-sync是一个Node.js递归的快速文件系统walker，是klaw的同步副本。它递归地列出目录中的所有文件和目录，并返回一个对象数组，每个对象都有两个属性:path和stats。path是文件或目录的完整路径，stats是fs.Stats的实例。
    "@types/node": "^10.11.5",
    "concurrently": "^4.1.0",
    # concurrently提供了很有用的功能, 有了concurrently我们可以通过npm install在项目内安装多个服务,然后配置package.json内的script命令, 然后通过命令行一键并行开启多个服务
    "graphql": "^14.1.1",
    "graphql-code-generator": "^0.16.0",
    "graphql-codegen-add": "^0.16.0",
    "graphql-codegen-time": "^0.16.0",
    "graphql-codegen-typescript-client": "^0.16.0",
    "graphql-codegen-typescript-common": "^0.16.0",
    "graphql-codegen-typescript-server": "^0.16.0",
    "graphql-tools": "^4.0.0",
    "husky": "^0.14.3",
    "jest": "^24.5.0",
    "klaw-sync": "^6.0.0",
    "lerna": "^3.13.1",
    "lint-staged": "^7.2.0",
    "prettier": "^1.15.2",
    "ts-jest": "^24.0.0",
    "ts-node": "^7.0.1",
    "tslint": "^5.11.0",
    "typescript": "^3.2.4"
  }
}
```
[用 husky 和 lint-staged 构建超溜的代码检查工作流](https://segmentfault.com/a/1190000009546913) 


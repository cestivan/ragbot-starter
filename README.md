# RAGBot 启动器

该项目是一个使用 Astra DB 和 OpenAI 创建聊天机器人的启动器。旨在易于部署和使用，重点关注性能和可用性。

## 功能

- **Astra DB 集成**：轻松存储和检索 Astra DB 数据库中的数据。
- **OpenAI 集成**：利用 OpenAI 的强大功能生成智能回复。
- **轻松部署**：只需点击几下即可将聊天机器人部署到 Vercel。
- **可定制**：修改和扩展聊天机器人以满足您的需求。

## 入门

### 先决条件

- 一个 Astra DB 账户。您可以 [在这里创建一个](https://astra.datastax.com/register)。
    - 一个 Astra 向量数据库
- 一个 OpenAI 账户。您可以 [在这里创建一个](https://platform.openai.com/)。

## 部署

轻松通过点击下面的按钮将聊天机器人部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/datastax/ragbot-starter&integration-ids=oac_HrgeXUSyqANAtm3MAOaTJ43a&env=OPENAI_API_KEY)

配置 Astra DB 集成并添加您的 `OPENAI_API_KEY` 环境变量。

注意：在部署到生产环境之前，您需要从构建步骤中删除种子脚本（`npm run seed`）。

### 本地开发

1. 将此存储库克隆到您的本地机器。
2. 通过在终端运行 `npm install` 安装依赖项。
3. 在您的 IDE 或 `.env` 文件中设置以下环境变量：
    - `OPENAI_API_KEY`：您的 OpenAI API 密钥
    - `ASTRA_DB_API_ENDPOINT`：您的 Astra DB 向量数据库端点
    - `ASTRA_DB_APPLICATION_TOKEN`：生成的 Astra 数据库应用令牌
        - 要创建新的令牌，请转到数据库的 `Connect` 标签并单击 `Generate Token`。（您的应用令牌以 `AstraCS:...` 开头）
    - `ASTRA_DB_NAMESPACE`：（可选）现有 Astra 名称空间/键空间 **_在启用向量的数据库中_**
4. 通过在终端中运行 `npm run seed` 为您的数据库填充示例数据。

### 运行项目

要启动开发服务器，请在终端中运行 `npm run dev`。打开 [http://localhost:3000](http://localhost:3000) 在您的浏览器中查看聊天机器人。

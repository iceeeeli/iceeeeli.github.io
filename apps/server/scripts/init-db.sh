#!/bin/bash

# PostgreSQL 命令路径
PSQL_PATH="/usr/local/Cellar/postgresql@15/15.9/bin/psql"

# 获取 server 目录的绝对路径
SERVER_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCHEMA_PATH="$SERVER_ROOT/db/schema.sql"

# 检查 psql 是否存在
if [ ! -f "$PSQL_PATH" ]; then
    echo "错误: 找不到 psql 命令，请确保 PostgreSQL 已正确安装"
    echo "请检查以下位置："
    echo "- /opt/homebrew/bin/psql"
    echo "- /usr/local/bin/psql"
    echo "- /usr/bin/psql"
    exit 1
fi

# 检查 schema.sql 是否存在
if [ ! -f "$SCHEMA_PATH" ]; then
    echo "错误: 找不到 schema.sql 文件"
    echo "期望路径: $SCHEMA_PATH"
    exit 1
fi

echo "正在初始化数据库..."
echo "使用 schema 文件: $SCHEMA_PATH"

# 执行 SQL 脚本 (连接到 postgres 数据库)
"$PSQL_PATH" -d postgres -f "$SCHEMA_PATH"

if [ $? -eq 0 ]; then
    echo "数据库初始化成功！"
else
    echo "数据库初始化失败！"
    exit 1
fi 
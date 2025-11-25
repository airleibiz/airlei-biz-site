@echo off
chcp 65001 > nul
echo ============= 开始清理Git历史中的大文件 =============
echo 1. 增大Git推送缓冲区（设置为1GB）...
git config --global http.postBuffer 1073741824
git config --global core.compression 0

echo 2. 清理历史中大于100MB的文件...
git filter-branch --force --index-filter ^
"git rm -r --cached --ignore-unmatch videos/" ^
--prune-empty --tag-name-filter cat -- --all

echo 3. 清理Git垃圾文件...
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo 4. 强制推送清理后的历史到远程...
git push origin main --force

echo ============= 清理完成！=============
pause
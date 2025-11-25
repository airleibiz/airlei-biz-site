@echo off
chcp 65001 > nul
echo ============= AIRLEI BIZ 网站推送终极解决方案 =============
echo 1. 停止追踪videos文件夹（保留本地文件）...
git rm -r --cached videos/ 2>nul

echo 2. 确保.gitignore忽略videos文件夹...
echo videos/ >> .gitignore
git add .gitignore

echo 3. 增大Git缓冲区，提升推送稳定性...
git config --global http.postBuffer 2147483648
git config --global core.compression 0
git config --global remote.origin.keepAlive 300

echo 4. 提交源码更改（不含视频）...
git add .
git commit -m "Final push: only source code, videos removed from Git" -q

echo 5. 强制推送源码到GitHub...
git push origin main --force

echo ============= 推送完成！若仍失败，检查网络或重试 =============
pause
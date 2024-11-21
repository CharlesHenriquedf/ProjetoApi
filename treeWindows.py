import os

def print_tree_to_file(startpath, output_file):
    with open(output_file, "w", encoding="utf-8") as f:
        for root, dirs, files in os.walk(startpath):
            level = root.replace(startpath, '').count(os.sep)
            indent = ' ' * 4 * level
            f.write(f"{indent}{os.path.basename(root)}/\n")
            subindent = ' ' * 4 * (level + 1)
            for file in files:
                f.write(f"{subindent}{file}\n")

project_dir = r"C:\Users\charl\Desktop\ProjetoApi\automationNotas" 
output_file = r"C:\Users\charl\Desktop\ProjetoApi\estrutura.txt"
print_tree_to_file(project_dir, output_file)

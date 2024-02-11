import re

if __name__ == "__main__":
    test_string = input("Enter your data: ")
    patterns = r'(\d{2}-[A-Za-z]{3}-\d{4})'
    matches = re.findall(patterns, test_string)
    print('Search results: ', matches)

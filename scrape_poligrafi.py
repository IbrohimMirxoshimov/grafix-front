import os
import json
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup, NavigableString

BASE_URL = "https://poligrafi.com/"
OUTPUT_DIR = "poligrafi_content"


def fetch_html(url: str) -> BeautifulSoup:
    """Fetch the HTML content of a URL and return a BeautifulSoup object."""
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
        )
    }
    response = requests.get(url, headers=headers, timeout=30)
    response.raise_for_status()
    return BeautifulSoup(response.text, "html.parser")


def extract_links(container):
    """Extract all <a> links inside container as list of dicts."""
    links = []
    for a in container.find_all("a"):
        href = a.get("href")
        if not href:
            continue
        full_url = urljoin(BASE_URL, href)
        links.append({
            "text": a.get_text(strip=True),
            "link": full_url,
        })
    return links


def extract_images(container):
    """Extract all <img> elements inside container as list of dicts."""
    imgs = []
    for img in container.find_all("img"):
        src = img.get("src") or img.get("data-src")
        if not src:
            continue
        full_src = urljoin(BASE_URL, src)
        imgs.append({
            "alt": img.get("alt", ""),
            "src": full_src,
        })
    return imgs


def extract_texts(container):
    """Extract visible texts inside container as list of strings."""
    texts = []
    for element in container.find_all(string=True):
        if isinstance(element, NavigableString):
            text = element.strip()
            # Skip scripts, styles, and empty texts, ensuring parent exists
            parent = element.parent
            if text and parent is not None and parent.name not in ("script", "style"):
                texts.append(text)
    return texts


def extract_content(container):
    """Return a dict with texts, links, and images extracted from container."""
    return {
        "texts": extract_texts(container),
        "links": extract_links(container),
        "images": extract_images(container),
    }


def ensure_output_dir():
    os.makedirs(OUTPUT_DIR, exist_ok=True)


def save_json(filename: str, data):
    path = os.path.join(OUTPUT_DIR, filename)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Saved {path}")


def scrape():
    soup = fetch_html(BASE_URL)
    ensure_output_dir()

    # Extract <header>, <nav>, <footer>
    header = soup.find("header")
    if header:
        save_json("header.json", extract_content(header))

    nav = soup.find("nav")
    if nav and nav is not header:  # avoid duplicate if nav inside header already handled
        save_json("main_menu.json", extract_content(nav))

    footer = soup.find("footer")
    if footer:
        save_json("footer.json", extract_content(footer))

    # Extract catalog-like sections (heuristic: class or id contains 'catalog')
    for idx, catalog in enumerate(soup.find_all(lambda tag: tag.has_attr("class") and any("catalog" in c.lower() for c in tag["class"])), start=1):
        save_json(f"catalog_{idx}.json", extract_content(catalog))

    # Extract top-level <section> tags
    sections = soup.find_all("section", recursive=False)
    if not sections and soup.body is not None:
        # fallback: look for divs with id inside body
        sections = [div for div in soup.body.find_all("div", id=True, recursive=False)]

    for idx, section in enumerate(sections, start=1):
        # Derive name
        section_id = section.get("id") or section.get("class", [None])[0] or f"section{idx}"
        section_name = f"{section_id}.json" if section_id else f"section{idx}.json"
        save_json(section_name, extract_content(section))

    print("Scraping completed.")


def main():
    try:
        scrape()
    except Exception as e:
        print(f"Error during scraping: {e}")


if __name__ == "__main__":
    main()